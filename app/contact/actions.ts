"use server"

import { google } from "googleapis"

// Google Sheets and Drive configuration
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

// File size limit (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024

export async function submitContactForm(formData: FormData) {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] === CONTACT FORM SUBMISSION START ===`)

  try {
    // Extract form data first
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const phone = formData.get("phone") as string
    const inquiryType = formData.get("inquiryType") as string
    const message = formData.get("message") as string

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

    for (let i = 0; i < 3; i++) {
      const file = formData.get(`file_${i}`) as File
      if (file && file.size > 0) {
        console.log(`[${timestamp}] Processing file ${i}: ${file.name} (${file.size} bytes)`)

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
          fileErrors.push(`${file.name} is too large (max 10MB)`)
          continue
        }

        // Check file type
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "text/csv",
          "text/plain",
          "application/zip",
          "application/xml",
          "application/json",
        ]

        if (file.type && !allowedTypes.includes(file.type)) {
          console.log(`[${timestamp}] File type not allowed: ${file.type}`)
          // Still allow it but log it
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
    if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
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
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file"],
    })

    const authClient = await auth.getClient()
    const sheets = google.sheets({ version: "v4", auth: authClient })
    const drive = google.drive({ version: "v3", auth: authClient })

    console.log(`[${timestamp}] Google Auth successful`)

    // Upload files to Google Drive (with timeout and error handling)
    const uploadedFileUrls: string[] = []

    if (files.length > 0) {
      console.log(`[${timestamp}] Starting file uploads...`)

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        console.log(`[${timestamp}] Uploading file ${i + 1}/${files.length}: ${file.name}`)

        try {
          // Create a timeout promise
          const uploadPromise = uploadFileToGoogleDrive(drive, file, timestamp, GOOGLE_DRIVE_FOLDER_ID)
          const timeoutPromise = new Promise(
            (_, reject) => setTimeout(() => reject(new Error("Upload timeout")), 30000), // 30 second timeout
          )

          const fileUrl = (await Promise.race([uploadPromise, timeoutPromise])) as string
          uploadedFileUrls.push(`${file.name}: ${fileUrl}`)
          console.log(`[${timestamp}] File uploaded successfully: ${file.name}`)
        } catch (fileError) {
          console.error(`[${timestamp}] Error uploading file ${file.name}:`, fileError)
          uploadedFileUrls.push(
            `${file.name}: Upload failed - ${fileError instanceof Error ? fileError.message : "Unknown error"}`,
          )
        }
      }
    }

    // Prepare data for Google Sheets
    const rowData = [
      timestamp,
      firstName,
      lastName,
      email,
      company,
      phone || "",
      inquiryType || "",
      message,
      uploadedFileUrls.join(" | ") || "No files",
    ]

    console.log(`[${timestamp}] Adding data to Google Sheets...`)

    // Add data to Google Sheets with timeout
    const sheetsPromise = sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A:I",
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    })

    const sheetsTimeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("Sheets timeout")), 10000), // 10 second timeout
    )

    const sheetsResponse = await Promise.race([sheetsPromise, sheetsTimeoutPromise])

    console.log(`[${timestamp}] Sheets updated successfully`)
    console.log(`[${timestamp}] === CONTACT FORM SUBMISSION SUCCESS ===`)

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error(`[${timestamp}] === ERROR IN CONTACT FORM ===`)
    console.error(`[${timestamp}] Error:`, error)
    console.error(`[${timestamp}] === END ERROR ===`)

    return {
      success: false,
      message: `There was an error sending your message. Please try again or contact us directly at info@wave2wave.io`,
    }
  }
}

async function uploadFileToGoogleDrive(drive: any, file: File, timestamp: string, folderId?: string): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())

  const fileMetadata = {
    name: `${timestamp}_${file.name}`,
    parents: folderId ? [folderId] : undefined,
  }

  const media = {
    mimeType: file.type || "application/octet-stream",
    body: buffer,
  }

  const uploadResponse = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
  })

  // Make file accessible
  await drive.permissions.create({
    fileId: uploadResponse.data.id!,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  })

  return `https://drive.google.com/file/d/${uploadResponse.data.id}/view`
}
