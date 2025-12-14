# Google Apps Script Update Instructions

## Problem
Unsubscribe requests are being posted to the "NPS Responses" sheet instead of the "Unsubscribe" sheet.

## Solution
Update your Google Apps Script with the enhanced code that properly routes requests.

---

## Step-by-Step Instructions:

### 1. Open Your Google Sheet
Go to: https://docs.google.com/spreadsheets/d/1lOLAtgFs0rNvbmxho3qX2xMEZGs7Ba8jL9H7xosNz8s

### 2. Open Apps Script Editor
- Click **Extensions** → **Apps Script**

### 3. Replace the Code
- Select ALL the existing code in the editor
- Delete it
- Copy the entire contents of `google-apps-script-unsubscribe-handler.js`
- Paste it into the Apps Script editor

### 4. Save the Script
- Click the **Save** icon (💾) or press Cmd+S / Ctrl+S
- Give it a name like "Wave2Wave Survey & Unsubscribe Handler"

### 5. Deploy the Script
- Click **Deploy** → **New deployment**
- Click the gear icon ⚙️ next to "Select type"
- Choose **Web app**
- Configure:
  - Description: "Wave2Wave Survey & Unsubscribe"
  - Execute as: **Me**
  - Who has access: **Anyone**
- Click **Deploy**
- Authorize the script if prompted
- Copy the **Web app URL** (should be the same as your current APPS_SCRIPT_URL)

### 6. Test the Unsubscribe
After deploying:
1. Click an unsubscribe link: `https://wave2wave.io/api/unsubscribe?email=test@example.com`
2. Check the **Unsubscribe** sheet in your Google Sheet
3. The email should appear there with a datetime stamp

### 7. Check the Logs (Optional)
To debug if issues persist:
- In Apps Script, click **Executions** (clock icon on left)
- Find your latest execution
- Click on it to see the logs
- Look for these key log messages:
  - `=== RECEIVED DATA ===`
  - `Sheet parameter: Unsubscribe`
  - `>>> ROUTING TO UNSUBSCRIBE HANDLER <<<`

---

## What the Enhanced Script Does:

### For UNSUBSCRIBE requests:
- Checks if `data.sheet === 'Unsubscribe'`
- Routes to `handleUnsubscribe()` function
- Writes to **"Unsubscribe"** sheet with columns: `email`, `DateTime`

### For SURVEY responses:
- Routes to `handleSurveyResponse()` function
- Writes to **"NPS Responses"** sheet (or "Responses" if that exists)
- All 24 survey columns preserved

### Enhanced Logging:
- Shows incoming data structure
- Shows which handler is being called
- Easier to debug routing issues

---

## Current Apps Script URL:
```
https://script.google.com/macros/s/AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8/exec
```

**Note:** This URL should remain the same after deployment. If it changes, update it in:
- `/app/api/unsubscribe/route.ts` (line 5)
- `/app/api/survey/route.ts` (line 3)
- `/app/api/nps-track/route.ts` (line 3)

---

## Verification Checklist:

- [ ] Google Apps Script code updated
- [ ] Script saved
- [ ] Script deployed as Web app
- [ ] Test unsubscribe link clicked
- [ ] Email appears in "Unsubscribe" sheet (NOT "NPS Responses")
- [ ] DateTime captured correctly
- [ ] Confirmation page displays

---

## Need Help?

If unsubscribe data is still going to the wrong sheet:
1. Check the Apps Script **Executions** logs
2. Verify the `sheet` parameter is being sent: `sheet: 'Unsubscribe'`
3. Ensure the script is routing to the correct handler
4. Check that the "Unsubscribe" sheet exists in your Google Sheet
