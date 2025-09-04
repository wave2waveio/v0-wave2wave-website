"use server"

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL!
  const GOOGLE_APPS_SCRIPT_NOTIFY_URL = process.env.GOOGLE_APPS_SCRIPT_NOTIFY_URL!
  const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID!

  try {
    // Generate timestamp in PDT
    const timestamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'short',
    })
      .format(new Date())
      .replace(/,/, '')
      .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')

    // Extract files
    const files: File[] = []
    for (let i = 0; i < 5; i++) {
      const file = formData.get(`file_${i}`)
      if (file instanceof File && file.size > 0) {
        files.push(file)
      }
    }

console.log("📦 Files received before encoding:", files.map((f, idx) => ({
  index: idx,
  name: f?.name,
  size: f?.size,
  type: f?.type,
  isFile: f instanceof File,
})))


    // Base64 encode for uploader
    const encodeFile = async (file: File) => {
      const buffer = Buffer.from(await file.arrayBuffer())
      return {
        fileName: file.name,
        mimeType: file.type,
        content: buffer.toString("base64"),
      }
    }

  const filesEncoded = await Promise.all(
   files
        .filter((f) => f && f.name && f.size > 0 && f.type) // ✅ filter out invalid entries
    .map(encodeFile)
    )

    const payload = {
      timestamp,
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      inquiryType: formData.get("inquiryType")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      files: filesEncoded,
    }

    // 1. Submit to uploader script
    const uploadRes = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })
    const uploadJson = await uploadRes.json()

    if (!uploadJson.success || !uploadJson.uploadedUrls) {
      throw new Error(uploadJson.message || "Upload failed")
    }

    // 2. Build the notification payload for second script
    const rowValues = [
      timestamp,
      payload.firstName,
      payload.lastName,
      payload.email,
      payload.company,
      payload.phone,
      payload.inquiryType,
      payload.message,
      ...uploadJson.uploadedUrls,
    ]

    const notifyPayload = {
      source: {
        spreadsheetId: GOOGLE_SHEETS_ID,
      },
      range: {
        row: uploadJson.rowIndex || 2, // fallback to 2 if unknown
        column: 1,
      },
      values: rowValues,
    }

    // 3. Call the notification script with expected structure
    await fetch(GOOGLE_APPS_SCRIPT_NOTIFY_URL, {
      method: "POST",
      body: JSON.stringify(notifyPayload),
      headers: { "Content-Type": "application/json" },
    })

    return {
      success: true,
      message: "Your message was sent successfully!",
    }
  } catch (error: any) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: error.message || "Unexpected error occurred",
    }
  }
}

// ---------- OpenPhone SMS: Server Action ----------
type SmsResult = { success: boolean; message: string }

const OPENPHONE_API_BASE = "https://api.openphone.com/v1"

function requireEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

// Cache the number ID for warm lambdas
let cachedPhoneNumberId: string | null = null

/** Look up the OpenPhone phoneNumberId that corresponds to OPENPHONE_FROM_NUMBER */
async function getOpenPhoneNumberId(apiKey: string, fromNumberE164: string): Promise<string> {
  if (cachedPhoneNumberId) return cachedPhoneNumberId

  const res = await fetch(`${OPENPHONE_API_BASE}/phone-numbers`, {
    method: "GET",
    headers: { Authorization: apiKey },
    cache: "no-store",
  })
  if (!res.ok) throw new Error(`OpenPhone: list numbers failed (${res.status})`)
  const json = await res.json()
  const match = (json?.data ?? []).find((n: any) => n?.number === fromNumberE164)
  if (!match?.id) throw new Error(`OpenPhone: could not find phoneNumberId for ${fromNumberE164}`)
  cachedPhoneNumberId = match.id as string
  return cachedPhoneNumberId
}

/** Send a single SMS via OpenPhone */
async function sendOpenPhoneSms(params: {
  apiKey: string
  phoneNumberId: string
  from: string // E.164
  to: string   // E.164
  content: string
}): Promise<void> {
  const { apiKey, phoneNumberId, from, to, content } = params
  const res = await fetch(`${OPENPHONE_API_BASE}/messages`, {
    method: "POST",
    headers: {
      // OpenPhone uses the API key as the Authorization header value (not Bearer)
      Authorization: apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      phoneNumberId,
      from,
      to: [to],
    }),
  })
  // Successful responses are typically 201 or 202
  if (!res.ok && res.status !== 202) {
    const text = await res.text().catch(() => "")
    throw new Error(`OpenPhone: send failed (${res.status}) ${text}`)
  }
}

/**
 * submitSmsForm — server action to:
 * 1) SMS your own number with the lead details ("SMS: {name}, {phone}, {message}")
 * 2) SMS the customer an acknowledgement
 */
export async function submitSmsForm(formData: FormData): Promise<SmsResult> {
  try {
    const apiKey = requireEnv("OPENPHONE_API_KEY")
    const fromNumber = requireEnv("OPENPHONE_FROM_NUMBER")           // your OpenPhone-managed number (E.164)
    const yourNumber = requireEnv("OPENPHONE_YOUR_PHONE_NUMBER")     // your personal/work E.164 to receive the lead

    const name = String(formData.get("name") || "").trim()
    const phone = String(formData.get("phone") || "").trim()         // full E.164 from client
    const message = String(formData.get("message") || "").trim()
    const smsConsent = String(formData.get("smsConsent") || "") === "true"

    if (!name || !phone) return { success: false, message: "Name and phone are required." }
    if (!smsConsent) return { success: false, message: "SMS consent is required." }
    if (!/^\+\d{4,15}$/.test(phone)) return { success: false, message: "Invalid phone number format." }

    const phoneNumberId = await getOpenPhoneNumberId(apiKey, fromNumber)

    // 1) Send lead details to YOU
    const internalText = `SMS: ${name}, ${phone}, ${message || "(no message)"}`
    await sendOpenPhoneSms({
      apiKey,
      phoneNumberId,
      from: fromNumber,
      to: yourNumber,
      content: internalText,
    })

    // 2) Auto-reply to the CUSTOMER
    const customerText =
      "Thanks for contacting Wave2Wave.io. We got your message and will get back to you soon."
    await sendOpenPhoneSms({
      apiKey,
      phoneNumberId,
      from: fromNumber,
      to: phone,
      content: customerText,
    })

    return { success: true, message: "Thanks! We’ll text you shortly." }
  } catch (err: any) {
    console.error("submitSmsForm error:", err)
    return { success: false, message: "There was an error sending your SMS. Please try again." }
  }
}
