"use server"

import { google } from "googleapis"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export async function submitContactForm(formData: FormData) {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] === CONTACT FORM SUBMISSION START ===`)

  try {
    // Extract form data
    const firstName = formData.get("firstName")?.toString()
    const lastName = formData.get("lastName")?.toString()
    const email = formData.get("email")?.toString()
    const company = formData.get("company")?.toString()
    const phone = formData.get("phone")?.toString() || ""
    const inquiryType = formData.get("inquiryType")?.toString() || ""
    const message = formData.get("message")?.toString()

    console.log(`[${timestamp}] Form data extracted:`, {
      firstName,
      lastName,
      email,
      company,
      hasPhone: !!phone,
      hasInquiryType: !!inquiryType,
      messageLength: message?.length || 0,
    })

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !message) {
      console.log(`[${timestamp}] Missing required fields`)
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Get uploaded files and validate them
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
        console.log(`[${timestamp}] Processing file ${i}: ${file.name} (${file.size} bytes)`)

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
          fileErrors.push(`${file.name} is too large (max 10MB)`)
          continue
        }

        // Check file type
        if (file.type && !allowedTypes.includes(file.type)) {
          fileErrors.push(`${file.name} has an unsupported file type. Supported formats: PDF, DOC, XLS, CSV, TXT, DWG, DXF, ZIP, XML, JSON`)
          continue
        }

        files.push(file)
      }
    }

    console.log(`[${timestamp}] Files to upload: ${files.length}`)

    if (fileErrors.length > 0) {
      return {
        success: false,
        message: `File upload errors: ${fileErrors.join(", ")}`,
      }
    }

    // Check environment variables
    if (
      !process.env.GOOGLE_SHEETS_ID ||
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_DRIVE_FOLDER_ID
    ) {
      console.log(`[${timestamp}] Missing environment variables`)
      return {
        success: false,
        message: "Configuration error. Please contact support.",
      }
    }

    // Initialize Google Auth
    console.log(`[${timestamp}] Initializing Google Auth...`)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const drive = google.drive({ version: "v3", auth })

    console.log(`[${timestamp}] Google Auth successful`)

    // Upload files to Google Drive
    const fileUrls = ["", "", "", "", ""] // Initialize 5 slots for URLs
    for (let i = 0; i < Math.min(files.length, 5); i++) {
      const file = files[i]
      console.log(`[${timestamp}] Uploading file ${i + 1}/${files.length}: ${file.name}`)

      try {
        const fileMetadata = {
          name: `${timestamp}_${file.name}`,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
        }
        const media = {
          mimeType: file.type || "application/octet-stream",
          body: file.stream(),
        }
        const uploadPromise = drive.files.create({
          resource: fileMetadata,
          media,
          fields: "id,webViewLink",
        })
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Upload timeout")), 30000))

        const fileResponse = await Promise.race([uploadPromise, timeoutPromise])
        fileUrls[i] = fileResponse.data.webViewLink

        // Make file publicly accessible
        await drive.permissions.create({
          fileId: fileResponse.data.id,
          requestBody: { role: "reader", type: "anyone" },
        })
        console.log(`[${timestamp}] File uploaded successfully: ${file.name}`)
      } catch (fileError: any) {
        console.error(`[${timestamp}] Error uploading file ${file.name}:`, fileError)
        fileUrls[i] = `Upload failed: ${fileError.message}`
      }
    }

    // Prepare data for Google Sheets (13 columns, including timestamp)
    const rowData = [
      timestamp,
      firstName,
      lastName,
      email,
      company,
      phone,
      inquiryType,
      message,
      ...fileUrls,
    ]

    console.log(`[${timestamp}] Adding data to Google Sheets...`)
    console.log(`[${timestamp}] Row data prepared: ${rowData.length} columns`)

    // Add data to Google Sheets
    const sheetsPromise = sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Sheet1!A2:M", // 13 columns, start at A2 to skip headers
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    })

    const sheetsTimeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Sheets timeout")), 15000))
    await Promise.race([sheetsPromise, sheetsTimeoutPromise])

    console.log(`[${timestamp}] Sheets updated successfully`)
    console.log(`[${timestamp}] === CONTACT FORM SUBMISSION SUCCESS ===`)

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error: any) {
    console.error(`[${timestamp}] === ERROR IN CONTACT FORM ===`)
    console.error(`[${timestamp}] Error:`, error)
    console.error(`[${timestamp}] === END ERROR ===`)

    return {
      success: false,
      message: `There was an error sending your message: ${error.message || "Unknown error"}. Please try again or contact us at info@wave2wave.io`,
    }
  }
}
