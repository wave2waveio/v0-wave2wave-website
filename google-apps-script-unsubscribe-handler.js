/**
 * Google Apps Script for handling Wave2Wave NPS Survey + Email Responses + Unsubscribe
 *
 * This script handles three types of data:
 * 1. Email responses (initial question clicks) - IMMEDIATE logging
 * 2. Full survey responses (complete survey submissions)
 * 3. Unsubscribe requests
 *
 * Spreadsheet ID: 1lOLAtgFs0rNvbmxho3qX2xMEZGs7Ba8jL9H7xosNz8s
 *
 * Sheets:
 * - "EmailResponse" - Initial email question responses (logged immediately when clicked)
 * - "NPS Responses" - Full survey responses (only if user completes survey)
 * - "Unsubscribe" - Email unsubscribe log
 *
 * IMPORTANT: Add this code to your existing Google Apps Script
 * or replace the doPost function with this enhanced version.
 */

function doPost(e) {
  try {
    const spreadsheetId = '1lOLAtgFs0rNvbmxho3qX2xMEZGs7Ba8jL9H7xosNz8s';
    const ss = SpreadsheetApp.openById(spreadsheetId);

    // Parse incoming data
    const data = JSON.parse(e.postData.contents);
    Logger.log('=== RECEIVED DATA ===');
    Logger.log('Full data: ' + JSON.stringify(data));
    Logger.log('Sheet parameter: ' + data.sheet);
    Logger.log('Has email field: ' + (data.email ? 'YES' : 'NO'));
    Logger.log('Has datetime field: ' + (data.datetime ? 'YES' : 'NO'));

    // Check if this is an unsubscribe request
    // Unsubscribe requests will have sheet='Unsubscribe' parameter
    if (data.sheet === 'Unsubscribe') {
      Logger.log('>>> ROUTING TO UNSUBSCRIBE HANDLER <<<');
      return handleUnsubscribe(ss, data);
    } else if (data.sheet === 'EmailResponse') {
      Logger.log('>>> ROUTING TO EMAIL RESPONSE HANDLER <<<');
      return handleEmailResponse(ss, data);
    } else {
      // Handle regular survey response (existing functionality)
      Logger.log('>>> ROUTING TO SURVEY RESPONSE HANDLER <<<');
      return handleSurveyResponse(ss, data);
    }

  } catch (error) {
    Logger.log('=== ERROR IN doPost ===');
    Logger.log('Error: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle unsubscribe requests
 */
function handleUnsubscribe(ss, data) {
  Logger.log('Processing unsubscribe request');

  // Get or create "Unsubscribe" sheet
  let sheet = ss.getSheetByName('Unsubscribe');
  if (!sheet) {
    Logger.log('Creating Unsubscribe sheet');
    sheet = ss.insertSheet('Unsubscribe');

    // Add headers
    sheet.getRange(1, 1, 1, 2).setValues([['email', 'DateTime']]);
    sheet.getRange(1, 1, 1, 2).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Append the unsubscribe record
  const email = data.email || '';
  const datetime = data.datetime || new Date().toISOString();

  Logger.log('Logging unsubscribe: ' + email);

  sheet.appendRow([
    email,
    datetime
  ]);

  Logger.log('Unsubscribe logged successfully');

  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Unsubscribed successfully'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle email response (initial question from email campaign)
 */
function handleEmailResponse(ss, data) {
  Logger.log('Processing email response');

  // Get or create "EmailResponse" sheet
  let sheet = ss.getSheetByName('EmailResponse');
  if (!sheet) {
    Logger.log('Creating EmailResponse sheet');
    sheet = ss.insertSheet('EmailResponse');

    // Add headers
    sheet.getRange(1, 1, 1, 3).setValues([['DateTime', 'User Email', 'Answer']]);
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Prepare data
  const datetime = data.datetime || new Date().toISOString();
  const userEmail = data.user_email || '';
  const answer = data.answer || '';

  Logger.log('Checking for duplicates: ' + userEmail + ' - ' + answer);

  // Check for duplicate entries within the last 10 seconds
  // This prevents multiple clicks/browser prefetch from creating duplicates
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    // Get the last 10 rows (or fewer if sheet has less)
    const numRowsToCheck = Math.min(10, lastRow - 1);
    const startRow = lastRow - numRowsToCheck + 1;
    const recentEntries = sheet.getRange(startRow, 1, numRowsToCheck, 3).getValues();

    const now = new Date();
    const tenSecondsAgo = new Date(now.getTime() - 10000); // 10 seconds ago

    for (let i = recentEntries.length - 1; i >= 0; i--) {
      const entryDate = new Date(recentEntries[i][0]);
      const entryEmail = recentEntries[i][1];
      const entryAnswer = recentEntries[i][2];

      // If we find a matching entry within the last 10 seconds, skip logging
      if (entryEmail === userEmail &&
          entryAnswer === answer &&
          entryDate >= tenSecondsAgo) {
        Logger.log('>>> DUPLICATE DETECTED - Skipping (entry from ' + entryDate.toISOString() + ')');
        return ContentService
          .createTextOutput(JSON.stringify({
            success: true,
            message: 'Duplicate skipped',
            duplicate: true
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
  }

  Logger.log('No duplicate found - Logging email response: ' + userEmail + ' - ' + answer);

  sheet.appendRow([
    datetime,
    userEmail,
    answer
  ]);

  Logger.log('Email response logged successfully');

  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Email response recorded'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle survey responses (existing functionality)
 */
function handleSurveyResponse(ss, data) {
  Logger.log('Processing survey response');

  // Try multiple possible sheet names for survey responses
  let sheet = ss.getSheetByName('NPS Responses') || ss.getSheetByName('Responses');

  if (!sheet) {
    Logger.log('Creating NPS Responses sheet');
    sheet = ss.insertSheet('NPS Responses');

    // Add headers (all 24 columns)
    const headers = [
      'Timestamp',
      'User Email',
      'Answer',
      'First Name',
      'Last Name',
      'Email',
      'Do you plan to order from Wave2Wave.io in the future?',
      'How likely are you to recommend Wave2Wave to a colleague or peer?',
      'Which Wave2Wave products or services have you used?',
      'Product quality',
      'Customization options',
      'Delivery speed',
      'Labeling & documentation',
      'Sales responsiveness',
      'Technical support',
      'Pricing/value',
      'What could we improve?',
      'Are there products or services you wish Wave2Wave offered that we currently don\'t?',
      'Do you have any upcoming projects where Wave2Wave could help?',
      'Do you have any upcoming projects where Wave2Wave could help? - Contact info',
      'What best describes your role?',
      'What type of organization do you work for?',
      'May we follow up with you about your feedback?',
      'May we follow up with you about your feedback? - Contact info'
    ];

    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Append the survey response
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.user_email || '',
    data.answer || '',
    data.first_name || '',
    data.last_name || '',
    data.email || '',
    data.future_orders || '',
    data.nps_rating || '',
    data.products_used || '',
    data.satisfaction_quality || '',
    data.satisfaction_customization || '',
    data.satisfaction_delivery || '',
    data.satisfaction_labeling || '',
    data.satisfaction_sales || '',
    data.satisfaction_support || '',
    data.satisfaction_pricing || '',
    data.improvements || '',
    data.missing_products || '',
    data.upcoming_projects || '',
    data.project_contact || '',
    data.role || '',
    data.organization_type || '',
    data.may_followup || '',
    data.followup_contact || ''
  ]);

  Logger.log('Survey response logged successfully');

  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Survey response recorded'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle GET requests (optional - for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput('Wave2Wave Survey & Unsubscribe Handler is active')
    .setMimeType(ContentService.MimeType.TEXT);
}
