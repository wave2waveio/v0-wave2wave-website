"use server"

import { google } from "googleapis"

export async function testGoogleConnection() {
  const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

  console.log("Testing Google connection...")
  console.log("Has GOOGLE_SHEETS_ID:", !!GOOGLE_SHEETS_ID)
  console.log("Has GOOGLE_SERVICE_ACCOUNT_EMAIL:", !!GOOGLE_SERVICE_ACCOUNT_EMAIL)
  console.log("Has GOOGLE_PRIVATE_KEY:", !!GOOGLE_PRIVATE_KEY)

  if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    return { success: false, message: "Missing environment variables" }
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const authClient = await auth.getClient()
    const sheets = google.sheets({ version: "v4", auth: authClient })

    // Try to read the sheet (minimal operation)
    const response = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEETS_ID,
    })

    console.log("Sheet title:", response.data.properties?.title)

    return {
      success: true,
      message: `Connected successfully to sheet: ${response.data.properties?.title}`,
    }
  } catch (error) {
    console.error("Connection test failed:", error)
    return {
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
