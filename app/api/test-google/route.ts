import { NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST() {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] === GOOGLE SHEETS TEST START ===`)

  // Check environment variables
  const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

  console.log(`[${timestamp}] Environment variables check:`)
  console.log(`[${timestamp}] GOOGLE_SHEETS_ID: ${GOOGLE_SHEETS_ID ? "SET" : "MISSING"}`)
  console.log(`[${timestamp}] GOOGLE_SERVICE_ACCOUNT_EMAIL: ${GOOGLE_SERVICE_ACCOUNT_EMAIL ? "SET" : "MISSING"}`)
  console.log(`[${timestamp}] GOOGLE_PRIVATE_KEY: ${GOOGLE_PRIVATE_KEY ? "SET" : "MISSING"}`)

  if (GOOGLE_SERVICE_ACCOUNT_EMAIL) {
    console.log(`[${timestamp}] Service account email: ${GOOGLE_SERVICE_ACCOUNT_EMAIL}`)
  }

  if (GOOGLE_SHEETS_ID) {
    console.log(`[${timestamp}] Sheets ID: ${GOOGLE_SHEETS_ID}`)
  }

  if (GOOGLE_PRIVATE_KEY) {
    console.log(`[${timestamp}] Private key length: ${GOOGLE_PRIVATE_KEY.length}`)
    console.log(`[${timestamp}] Private key starts with: ${GOOGLE_PRIVATE_KEY.substring(0, 50)}...`)
  }

  if (!GOOGLE_SHEETS_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    const missing = []
    if (!GOOGLE_SHEETS_ID) missing.push("GOOGLE_SHEETS_ID")
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL")
    if (!GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY")

    return NextResponse.json({
      success: false,
      message: `Missing environment variables: ${missing.join(", ")}`,
    })
  }

  try {
    console.log(`[${timestamp}] Creating Google Auth...`)

    // Validate private key format
    if (!GOOGLE_PRIVATE_KEY.includes("-----BEGIN PRIVATE KEY-----")) {
      console.error(`[${timestamp}] Private key format error`)
      return NextResponse.json({
        success: false,
        message: "Private key format error: Missing BEGIN marker",
      })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    })

    console.log(`[${timestamp}] Getting auth client...`)
    const authClient = await auth.getClient()
    console.log(`[${timestamp}] Auth client created successfully`)

    const sheets = google.sheets({ version: "v4", auth: authClient })

    console.log(`[${timestamp}] Testing sheet access...`)
    const response = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEETS_ID,
    })

    console.log(`[${timestamp}] Sheet access successful`)
    console.log(`[${timestamp}] Sheet title: ${response.data.properties?.title}`)
    console.log(`[${timestamp}] Sheet ID: ${response.data.spreadsheetId}`)

    // Try to read some data
    console.log(`[${timestamp}] Testing data read...`)
    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A1:Z1", // Read first row
    })

    console.log(`[${timestamp}] Data read successful`)
    console.log(`[${timestamp}] First row data:`, dataResponse.data.values)

    return NextResponse.json({
      success: true,
      message: `✅ Connection successful! Sheet: "${response.data.properties?.title}" | Rows found: ${dataResponse.data.values?.length || 0}`,
    })
  } catch (error) {
    console.error(`[${timestamp}] === ERROR ===`)
    console.error(`[${timestamp}] Error type: ${error?.constructor?.name}`)
    console.error(`[${timestamp}] Error message: ${error instanceof Error ? error.message : "Unknown error"}`)

    if (error && typeof error === "object" && "code" in error) {
      console.error(`[${timestamp}] Error code: ${error.code}`)
    }

    if (error && typeof error === "object" && "status" in error) {
      console.error(`[${timestamp}] HTTP status: ${error.status}`)
    }

    console.error(`[${timestamp}] Full error:`, error)

    return NextResponse.json({
      success: false,
      message: `Connection failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    })
  }
}
