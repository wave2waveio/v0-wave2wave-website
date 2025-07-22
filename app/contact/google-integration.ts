/* 
import { Readable } from "stream"
import { google as googleapis } from "googleapis"

 export async function handleGoogleIntegration({ timestamp, formData, files }) {
  const google = googleapis

  const firstName = formData.get("firstName")?.toString() || ""
  const lastName = formData.get("lastName")?.toString() || ""
  const email = formData.get("email")?.toString() || ""
  const company = formData.get("company")?.toString() || ""
  const phone = formData.get("phone")?.toString() || ""
  const inquiryType = formData.get("inquiryType")?.toString() || ""
  const message = formData.get("message")?.toString() || ""

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive"],
  })

  const authClient = await auth.getClient()
  const sheets = google.sheets({ version: "v4", auth: authClient })
  const drive = google.drive({ version: "v3", auth: authClient })

  const fileUrls = ["", "", "", "", ""]

  for (let i = 0; i < Math.min(files.length, 5); i++) {
    const file = files[i]
    const buffer = await file.arrayBuffer()
    const readableStream = new Readable({
      read() {
        this.push(Buffer.from(buffer))
        this.push(null)
      },
    })

    const upload = await drive.files.create({
      resource: {
        name: `${timestamp}_${file.name}`,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      },
      media: {
        mimeType: file.type || "application/octet-stream",
        body: readableStream,
      },
      fields: "id,webViewLink",
      supportsAllDrives: true,
    })

    fileUrls[i] = upload.data.webViewLink || ""

    await drive.permissions.create({
      fileId: upload.data.id!,
      requestBody: { role: "reader", type: "anyone" },
      supportsAllDrives: true,
    })
  }

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

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Sheet1!A2:M",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [rowData] },
  })

  const sheetData = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Sheet1!A:A",
  })
  const rowIndex = sheetData.data.values ? sheetData.data.values.length : 2

  await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: { spreadsheetId: process.env.GOOGLE_SHEETS_ID },
      range: { row: rowIndex, column: 1 },
      values: rowData,
    }),
  })

  return { success: true, message: "Google integration completed successfully", rowIndex }
}
*/
