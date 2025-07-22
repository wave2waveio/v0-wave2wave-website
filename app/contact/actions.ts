"use server"

import { Readable } from "stream"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB to match client-side limit

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] === CONTACT FORM SUBMISSION START ===`)

  // Mock response for v0.dev previews
  if (process.env.NEXT_PUBLIC_ENV === "preview") {
    console.log(`[${timestamp}] Preview mode: Skipping Google API calls`)
    return {
      success: true,
      message: "Preview mode: Form submission simulated successfully",
    }
  }

  // Dynamically import googleapis in production
  let google
  try {
    google = await import("googleapis").then((module) => module.google)
    console.log(`[${timestamp}] googleapis module loaded successfully`)
  } catch (importError: any) {
    console.error(`[${timestamp}] Failed to import googleapis:`, importError)
    return {
      success: false,
      message: "Server configuration error: Unable to load Google APIs. Please try again later or contact us at info@wave2wave.io",
    }
  }

  try {
    // Extract form data with type safety
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
        console.log(`[${timestamp}] Processing file ${i}: ${file.name} (${file.size} bytes, type: ${file.type})`)

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
          fileErrors.push(`${file.name} is too large (max 5MB)`)
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
    const missingEnvVars = []
    if (!process.env.GOOGLE_SHEETS_ID) missingEnvVars.push("GOOGLE_SHEETS_ID")
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missingEnvVars.push("GOOGLE_SERVICE_ACCOUNT_EMAIL")
    if (!process.env.GOOGLE_PRIVATE_KEY) missingEnvVars.push("GOOGLE_PRIVATE_KEY")
    if (!process.env.GOOGLE_DRIVE_FOLDER_ID) missingEnvVars.push("GOOGLE_DRIVE_FOLDER_ID")
    if (!process.env.GOOGLE_APPS_SCRIPT_URL) missingEnvVars.push("GOOGLE_APPS_SCRIPT_URL")

    if (missingEnvVars.length > 0) {
      console.log(`[${timestamp}] Missing environment variables: ${missingEnvVars.join(", ")}`)
      return {
        success: false,
        message: `Configuration error: Missing ${missingEnvVars.join(", ")}. Please contact support.`,
      }
    }

    // Initialize Google Auth
    console.log(`[${timestamp}] Initializing Google Auth...`)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/drive"],
    })

    let authClient
    try {
      authClient = await auth.getClient()
      console.log(`[${timestamp}] Google Auth successful`)
    } catch (authError: any) {
      console.error(`[${timestamp}] Google Auth failed:`, authError)
      return {
        success: false,
        message: `Authentication error with Google services: ${authError.message || "Unknown error"}. Please try again later.`,
      }
    }

    const sheets = google.sheets({ version: "v4", auth: authClient })
    const drive = google.drive({ version: "v3", auth: authClient })

    // Validate Google Drive folder
    console.log(`[${timestamp}] Validating Google Drive folder ID: ${process.env.GOOGLE_DRIVE_FOLDER_ID}`)
    try {
      const folderResponse = await drive.files.get({
        fileId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        fields: "id, name, mimeType",
        supportsAllDrives: true,
      })
      if (folderResponse.data.mimeType !== "application/vnd.google-apps.folder") {
        throw new Error(`Invalid Google Drive folder ID: ${process.env.GOOGLE_DRIVE_FOLDER_ID} is not a folder`)
      }
      console.log(`[${timestamp}] Google Drive folder validated: ${folderResponse.data.name}`)
    } catch (folderError: any) {
      console.error(`[${timestamp}] Google Drive folder validation failed:`, folderError)
      return {
        success: false,
        message: `Invalid Google Drive folder configuration: ${folderError.message || "Unknown error"}. Please contact support.`,
      }
    }

    // Upload files to Google Drive
    const fileUrls = ["", "", "", "", ""] // Initialize 5 slots for URLs
    for (let i = 0; i < Math.min(files.length, 5); i++) {
      const file = files[i]
      console.log(`[${timestamp}] Uploading file ${i + 1}/${files.length}: ${file.name} (${file.size} bytes)`)

      try {
        // Convert File to Node.js Readable stream
        const buffer = await file.arrayBuffer()
        const readableStream = new Readable({
          read() {
            this.push(Buffer.from(buffer))
            this.push(null) // Signal end of stream
          },
        })
        console.log(`[${timestamp}] Created Readable stream for ${file.name}`)

        const fileMetadata = {
          name: `${timestamp}_${file.name}`,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
        }
        const media = {
          mimeType: file.type || "application/octet-stream",
          body: readableStream,
        }
        const uploadPromise = drive.files.create({
          resource: fileMetadata,
          media,
          fields: "id,webViewLink",
          supportsAllDrives: true,
        })
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Upload timeout")), 60000))

        const fileResponse = await Promise.race([uploadPromise, timeoutPromise])
        if (!fileResponse || !fileResponse.data || !fileResponse.data.id || !fileResponse.data.webViewLink) {
          throw new Error(`Invalid file upload response for ${file.name}`)
        }
        fileUrls[i] = fileResponse.data.webViewLink

        // Make file publicly accessible
        try {
          await drive.permissions.create({
            fileId: fileResponse.data.id,
            requestBody: { role: "reader", type: "anyone" },
            supportsAllDrives: true,
          })
          console.log(`[${timestamp}] File uploaded and permissions set: ${file.name}`)
        } catch (permError: any) {
          console.error(`[${timestamp}] Error setting permissions for ${file.name}:`, permError)
          fileUrls[i] = `Permission failed: ${permError.message}`
        }
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
    let rowIndex
    try {
      const sheetsPromise = sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        range: "Sheet1!A2:M", // 13 columns, start at A2 to skip headers
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [rowData],
        },
      })

      const sheetsTimeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Sheets timeout")), 15000))
      const response = await Promise.race([sheetsPromise, sheetsTimeoutPromise])
      
      // Estimate row index (append adds to the last row)
      const sheetData = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEETS_ID,
        range: "Sheet1!A:A",
      })
      rowIndex = sheetData.data.values ? sheetData.data.values.length : 2
    } catch (sheetsError: any) {
      console.error(`[${timestamp}] Google Sheets append failed:`, sheetsError)
      return {
        success: false,
        message: `Failed to save data to Google Sheets: ${sheetsError.message || "Unknown error"}. Please try again.`,
      }
    }

    console.log(`[${timestamp}] Sheets updated successfully`)

    // Call Google Apps Script Web App to trigger sendEmailNotification
    try {
      console.log(`[${timestamp}] Calling Google Apps Script Web App...`)
      const scriptResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: { spreadsheetId: process.env.GOOGLE_SHEETS_ID },
          range: { row: rowIndex, column: 1 },
          values: rowData,
        }),
      })

      if (!scriptResponse.ok) {
        throw new Error(`HTTP ${scriptResponse.status}: ${await scriptResponse.text()}`)
      }
      console.log(`[${timestamp}] Google Apps Script executed successfully`)
    } catch (scriptError: any) {
      console.error(`[${timestamp}] Google Apps Script call failed:`, scriptError)
      // Log error but don't fail the submission
    }

    console.log(`[${timestamp}] === CONTACT FORM SUBMISSION SUCCESS ===`)

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error: any) {
    console.error(`[${timestamp}] === ERROR IN CONTACT FORM ===`)
    console.error(`[${timestamp}] Error:`, error)
    console.error(`[${timestamp}] === END ERROR ===`)

    let message = `There was an error sending your message: ${error.message || "Unknown error"}. Please try again or contact us at info@wave2wave.io`
    if (error.message.includes("Payload Too Large") || error.message.includes("FUNCTION_PAYLOAD_TOO_LARGE")) {
      message = "The uploaded file is too large (max 5MB). Please upload a smaller file or try without files."
    } else if (error.message.includes("pipe is not a function")) {
      message = "Error processing file upload. Please try a different file or contact us at info@wave2wave.io"
    } else if (error.message.includes("File not found") || error.status === 404) {
      message = "Google Drive folder not found or inaccessible. Please contact support at info@wave2wave.io"
    }

    return {
      success: false,
      message,
    }
  }
}
