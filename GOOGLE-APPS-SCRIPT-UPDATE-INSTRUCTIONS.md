# Google Apps Script Update Instructions

## Problems Solved
1. Unsubscribe requests were being posted to the "NPS Responses" sheet instead of the "Unsubscribe" sheet
2. Email responses (initial question clicks) were only captured if user completed the full survey
3. Multiple duplicate entries created when email links clicked (browser prefetch/multiple requests)

## Solution
Update your Google Apps Script with the enhanced code that:
- Properly routes unsubscribe requests to "Unsubscribe" sheet
- Immediately logs email responses to "EmailResponse" sheet (before survey completion)
- Prevents duplicate entries with 10-second duplicate detection
- Continues to log full survey responses to "NPS Responses" sheet

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

## Data Flow Overview:

### Scenario 1: User Clicks Email Survey Link
```
1. User clicks: https://wave2wave.io/api/survey?user=email@test.com&answer=yes
2. GET /api/survey endpoint receives request
3. ✅ IMMEDIATELY logs to "EmailResponse" sheet via Google Apps Script
4. Redirects user to /nps-survey page
5. User sees survey form (may or may not complete it)
   - If completes: Also logged to "NPS Responses" sheet
   - If abandons: Email response STILL captured in "EmailResponse"
```

### Scenario 2: User Completes Full Survey
```
1. User submits survey form on /nps-survey page
2. POST /api/survey endpoint receives form data
3. ✅ Logs all 24 columns to "NPS Responses" sheet
4. Shows thank you message
```

### Scenario 3: User Clicks Unsubscribe Link
```
1. User clicks: https://wave2wave.io/api/unsubscribe?email=email@test.com
2. GET /api/unsubscribe endpoint receives request
3. ✅ Logs to "Unsubscribe" sheet via Google Apps Script
4. Redirects to /unsubscribe-confirmation page
5. Shows confirmation message
```

---

## What the Enhanced Script Does:

### For EMAIL RESPONSE clicks (NEW):
- Checks if `data.sheet === 'EmailResponse'`
- Routes to `handleEmailResponse()` function
- **Duplicate Detection:** Checks last 10 entries for same email+answer within 10 seconds
- If duplicate found: Skips logging and returns success (prevents browser prefetch duplicates)
- If no duplicate: Writes to **"EmailResponse"** sheet with columns: `DateTime`, `User Email`, `Answer`
- Logs IMMEDIATELY when user clicks email link (before survey completion)
- Captures 100% of email engagement regardless of survey completion

### For UNSUBSCRIBE requests:
- Checks if `data.sheet === 'Unsubscribe'`
- Routes to `handleUnsubscribe()` function
- Writes to **"Unsubscribe"** sheet with columns: `email`, `DateTime`

### For FULL SURVEY responses:
- Routes to `handleSurveyResponse()` function
- Writes to **"NPS Responses"** sheet (or "Responses" if that exists)
- All 24 survey columns preserved
- Only logged if user completes entire survey

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

---

## Verification Checklist:

### Deployment:
- [ ] Google Apps Script code updated with all three handlers
- [ ] Script saved
- [ ] Script deployed as Web app
- [ ] Web app URL remains: `AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8`

### Test Email Response (NEW):
- [ ] Click email survey link: `https://wave2wave.io/api/survey?user=test@example.com&answer=yes`
- [ ] Check **"EmailResponse"** sheet in Google Sheet
- [ ] Verify row with: DateTime, test@example.com, yes
- [ ] Confirm redirect to survey page works

### Test Unsubscribe:
- [ ] Click unsubscribe link: `https://wave2wave.io/api/unsubscribe?email=test@example.com`
- [ ] Check **"Unsubscribe"** sheet (NOT "NPS Responses")
- [ ] Email appears with DateTime stamp
- [ ] Confirmation page displays

### Test Full Survey Completion:
- [ ] Complete entire survey from start to finish
- [ ] Check **"NPS Responses"** sheet
- [ ] All 24 columns populated correctly
- [ ] Email response ALSO in "EmailResponse" sheet (from initial click)

---

## Need Help?

### Troubleshooting Data Routing Issues:

**If data goes to wrong sheet:**
1. Check Apps Script **Executions** logs (clock icon in Apps Script editor)
2. Find latest execution and look for routing messages:
   - `>>> ROUTING TO EMAIL RESPONSE HANDLER <<<`
   - `>>> ROUTING TO UNSUBSCRIBE HANDLER <<<`
   - `>>> ROUTING TO SURVEY RESPONSE HANDLER <<<`
3. Verify the `sheet` parameter in the data:
   - EmailResponse: `sheet: 'EmailResponse'`
   - Unsubscribe: `sheet: 'Unsubscribe'`
   - Survey: no `sheet` parameter or other value
4. Ensure all three sheets exist in Google Sheet:
   - "EmailResponse" (3 columns)
   - "Unsubscribe" (2 columns)
   - "NPS Responses" (24 columns)

**If email responses aren't being captured:**
1. Verify `/app/api/survey/route.ts` GET endpoint is logging before redirect
2. Check browser console for "=== EMAIL RESPONSE CLICKED ===" message
3. Check Google Apps Script logs for "Processing email response"
4. Confirm EmailResponse sheet was created with correct headers

**If seeing duplicate entries:**
1. Verify you've deployed the latest Google Apps Script code
2. Check Apps Script logs for ">>> DUPLICATE DETECTED - Skipping" messages
3. Old duplicates won't be removed automatically - you can manually delete them
4. New clicks should only create one entry per email+answer combination

**Common Issues:**
- **Script not deployed:** Must deploy as Web app after code changes
- **Wrong URL:** Verify APPS_SCRIPT_URL in both route.ts files
- **Sheet name typo:** Names are case-sensitive ("EmailResponse" not "emailresponse")
- **Missing headers:** Script creates sheets automatically, but verify headers match
- **Still seeing duplicates:** Make sure the Google Apps Script was saved AND deployed
