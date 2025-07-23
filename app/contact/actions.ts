"use server"

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL!
  const GOOGLE_APPS_SCRIPT_NOTIFY_URL = process.env.GOOGLE_APPS_SCRIPT_NOTIFY_URL!

  try {
    const files: File[] = []
    for (let i = 0; i < 5; i++) {
      const file = formData.get(`file_${i}`)
      if (file instanceof File && file.size > 0) {
        files.push(file)
      }
    }

    const encodeFile = async (file: File) => {
      const buffer = Buffer.from(await file.arrayBuffer())
      return {
        fileName: file.name,
        mimeType: file.type,
        content: buffer.toString("base64"),
      }
    }

    const filesEncoded = await Promise.all(files.map(encodeFile))

    const payload = {
      timestamp: new Date().toISOString(),
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      company: formData.get("company")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      inquiryType: formData.get("inquiryType")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      files: filesEncoded,
    }

    // Submit to main Apps Script to write to Sheets + upload files
    const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })

    const json = await res.json()
    if (!json.success) throw new Error(json.message || "Google Apps Script upload failed")

    // Notify via second Apps Script (email, etc.)
    await fetch(GOOGLE_APPS_SCRIPT_NOTIFY_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })

    return { success: true, message: "Your message was sent successfully!" }
  } catch (error: any) {
    console.error("Form submission error:", error)
    return { success: false, message: error.message || "Error submitting form" }
  }
}
