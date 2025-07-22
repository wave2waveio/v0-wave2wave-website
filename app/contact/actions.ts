"use server"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB limit

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  // Generate timestamp in PDT
  const timestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  })
    .format(new Date())
    .replace(/,/, "")
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2")

  console.log(`[${timestamp}] === CONTACT FORM SUBMISSION START ===`)

  // Preview mode shortcut
  if (process.env.NEXT_PUBLIC_ENV === "preview") {
    console.log(`[${timestamp}] Preview mode: Skipping Google API calls`)
    return {
      success: true,
      message: "Preview mode: Form submission simulated successfully",
    }
  }

  try {
    // Extract form data
    const firstName = formData.get("firstName")?.toString() || ""
    const lastName = formData.get("lastName")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const company = formData.get("company")?.toString() || ""
    const phone = formData.get("phone")?.toString() || ""
    const inquiryType = formData.get("inquiryType")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    console.log(`[${timestamp}] Form data extracted:`, {
      firstName,
      lastName,
      email,
      company,
      hasPhone: !!phone,
      hasInquiryType: !!inquiryType,
      messageLength: message.length,
    })

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate files
    const files: File[] = []
    const fileErrors: string[] = []
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
      "text/plain",
      "application/acad",
      "application/dxf",
      "application/zip",
      "application/xml",
      "application/json",
    ]

    for (let i = 0; i < 5; i++) {
      const file = formData.get(`file_${i}`)
      if (file instanceof File && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          fileErrors.push(`${file.name} is too large (max 5MB)`)
          continue
        }
        if (file.type && !allowedTypes.includes(file.type)) {
          fileErrors.push(`${file.name} has an unsupported file type.`)
          continue
        }
        files.push(file)
      }
    }

    if (fileErrors.length > 0) {
      return {
        success: false,
        message: `File upload errors: ${fileErrors.join(", ")}`,
      }
    }

    // Check required env vars
    const requiredEnv = [
      "GOOGLE_SHEETS_ID",
      "GOOGLE_SERVICE_ACCOUNT_EMAIL",
      "GOOGLE_PRIVATE_KEY",
      "GOOGLE_DRIVE_FOLDER_ID",
      "GOOGLE_APPS_SCRIPT_URL",
    ]
    const missingEnv = requiredEnv.filter((key) => !process.env[key])
    if (missingEnv.length > 0) {
      return {
        success: false,
        message: `Configuration error: Missing ${missingEnv.join(", ")}`,
      }
    }

    // Dynamically import Google integration module
    // const { handleGoogleIntegration } = await import("./google-integration")
    // const result = await handleGoogleIntegration({ timestamp, formData, files })

    console.log(`[${timestamp}] === CONTACT FORM SUBMISSION SUCCESS ===`)

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error: any) {
    console.error(`[${timestamp}] === ERROR IN CONTACT FORM ===`)
    console.error(error)
    console.error(`[${timestamp}] === END ERROR ===`)

    let message = `There was an error sending your message: ${error.message || "Unknown error"}`
    if (error.message.includes("Payload Too Large")) {
      message = "The uploaded file is too large (max 5MB). Please upload a smaller file or try without files."
    }
    return {
      success: false,
      message,
    }
  }
}
