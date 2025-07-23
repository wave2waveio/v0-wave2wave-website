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
