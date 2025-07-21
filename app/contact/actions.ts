"use server"

import { google } from "googleapis"

// Google Sheets and Drive configuration
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

export async function submitContactForm(formData: FormData) {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] === CONTACT FORM SUBMISSION START ===`)

  // Debug environment variables (without exposing sensitive data)
  console.log(`[${timestamp}] Environment variables check:`)
  console.log(`[${timestamp}] GOOGLE_SHEETS_ID exists: ${!!GOOGLE_SHEETS_ID}`)
  console.log(`[${timestamp}] GOOGLE_DRIVE_FOLDER_ID exists: ${!!GOOGLE_DRIVE_FOLDER_ID}`)
  console.log(`[${timestamp}] GOOGLE_SERVICE_ACCOUNT_EMAIL exists: ${!!GOOGLE_SERVICE_ACCOUNT_EMAIL}`)
  console.log(`[${timestamp}] GOOGLE_PRIVATE_KEY exists: ${!!GOOGLE_PRIVATE_KEY}`)

  if (GOOGLE_SERVICE_ACCOUNT_EMAIL) {
    console.log(`[${timestamp}] Service account email: ${GOOGLE_SERVICE_ACCOUNT_EMAIL}`)
  }

  if (GOOGLE_SHEETS_ID) {
    console.log(`[${timestamp}] Sheets ID: ${GOOGLE_SHEETS_ID}`)
  }

  // Check if environment variables are available
  if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.log(`[${timestamp}] Missing environment variables`)
    return {
      success: false,
      message: "Configuration error: Missing required environment variables. Please contact support.",
    }
  }

  try {
    // Extract form data
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

    // Get uploaded files
    const files: File[] = []
    for (let i = 0; i < 3; i++) {
      const file = formData.get(`file_${i}`) as File
      if (file && file.size > 0) {
        files.push(file)
      }
    }

    console.log(`[${timestamp}] Files uploaded: ${files.length}`)
    files.forEach((file, index) => {
      console.log(`[${timestamp}] File ${index}: ${file.name} (${file.size} bytes, ${file.type})`)
    })

    // Initialize Google Auth
    console.log(`[${timestamp}] Initializing Google Auth...`)

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file"],
    })

    console.log(`[${timestamp}] Getting auth client...`)
    const authClient = await auth.getClient()
    console.log(`[${timestamp}] Auth client obtained successfully`)

    const sheets = google.sheets({ version: "v4", auth: authClient })
    const drive = google.drive({ version: "v3", auth: authClient })

    // Upload files to Google Drive
    const uploadedFileUrls: string[] = []
    console.log(`[${timestamp}] Starting file uploads...`)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      console.log(`[${timestamp}] Uploading file ${i + 1}/${files.length}: ${file.name} (${file.size} bytes)`)

      try {
        const buffer = Buffer.from(await file.arrayBuffer())
        console.log(`[${timestamp}] File buffer created: ${buffer.length} bytes`)

        const fileMetadata = {
          name: `${timestamp}_${file.name}`, // Add timestamp to avoid conflicts
          parents: GOOGLE_DRIVE_FOLDER_ID ? [GOOGLE_DRIVE_FOLDER_ID] : undefined,
        }

        const media = {
          mimeType: file.type || "application/octet-stream",
          body: buffer,
        }

        const uploadResponse = await drive.files.create({
          requestBody: fileMetadata,
          media: media,
        })

        console.log(`[${timestamp}] File uploaded successfully: ${uploadResponse.data.id}`)

        // Make file accessible
        await drive.permissions.create({
          fileId: uploadResponse.data.id!,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        })

        const fileUrl = `https://drive.google.com/file/d/${uploadResponse.data.id}/view`
        uploadedFileUrls.push(`${file.name}: ${fileUrl}`)
        console.log(`[${timestamp}] File URL created: ${fileUrl}`)
      } catch (fileError) {
        console.error(`[${timestamp}] Error uploading file ${file.name}:`, fileError)
        uploadedFileUrls.push(`${file.name}: Upload failed`)
      }
    }

    console.log(`[${timestamp}] Files processed: ${uploadedFileUrls.length} entries`)

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
      uploadedFileUrls.join(" | "),
    ]

    console.log(`[${timestamp}] Adding data to Google Sheets...`)
    console.log(`[${timestamp}] Row data prepared: ${rowData.length} columns`)

    // Add data to Google Sheets
    const sheetsResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A:I",
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    })

    console.log(`[${timestamp}] Sheets response status: ${sheetsResponse.status}`)
    console.log(`[${timestamp}] Updated range: ${sheetsResponse.data.updates?.updatedRange}`)
    console.log(`[${timestamp}] Updated rows: ${sheetsResponse.data.updates?.updatedRows}`)
    console.log(`[${timestamp}] === CONTACT FORM SUBMISSION SUCCESS ===`)

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error(`[${timestamp}] === ERROR IN CONTACT FORM ===`)
    console.error(`[${timestamp}] Error type: ${error?.constructor?.name}`)
    console.error(`[${timestamp}] Error message: ${error instanceof Error ? error.message : "Unknown error"}`)
    console.error(`[${timestamp}] Error stack: ${error instanceof Error ? error.stack : "No stack trace"}`)

    // Log additional error details if available
    if (error && typeof error === "object") {
      console.error(`[${timestamp}] Error details:`, JSON.stringify(error, null, 2))
    }

    console.error(`[${timestamp}] === END ERROR ===`)

    return {
      success: false,
      message: `There was an error sending your message: ${error instanceof Error ? error.message : "Unknown error"}. Please try again or contact support.`,
    }
  }
}
