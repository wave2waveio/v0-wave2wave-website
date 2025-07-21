"use server"

import { google } from "googleapis"

// Google Sheets and Drive configuration
const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

// Initialize Google Auth
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive.file"],
})

export async function submitContactForm(formData: FormData) {
  // Check if environment variables are available
  if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    // Return mock response for preview/development
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      success: true,
      message: "Your message has been received! (Preview mode - no actual submission)",
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

    // Get uploaded files
    const files = formData.getAll("files") as File[]

    // Initialize Google APIs
    const authClient = await auth.getClient()
    const sheets = google.sheets({ version: "v4", auth: authClient })
    const drive = google.drive({ version: "v3", auth: authClient })

    // Upload files to Google Drive
    const uploadedFileUrls: string[] = []

    for (const file of files) {
      if (file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())

        const fileMetadata = {
          name: file.name,
          parents: [GOOGLE_DRIVE_FOLDER_ID],
        }

        const media = {
          mimeType: file.type,
          body: buffer,
        }

        const uploadResponse = await drive.files.create({
          requestBody: fileMetadata,
          media: media,
        })

        // Make file accessible (optional - adjust permissions as needed)
        await drive.permissions.create({
          fileId: uploadResponse.data.id!,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        })

        uploadedFileUrls.push(`https://drive.google.com/file/d/${uploadResponse.data.id}/view`)
      }
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString()
    const rowData = [
      timestamp,
      firstName,
      lastName,
      email,
      company,
      phone || "",
      inquiryType || "",
      message,
      uploadedFileUrls.join(", "),
    ]

    // Add data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A:I", // Adjust range as needed
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    })

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again or contact us directly.",
    }
  }
}
