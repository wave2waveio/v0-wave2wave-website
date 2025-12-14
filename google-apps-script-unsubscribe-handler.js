/**
 * Google Apps Script for handling Wave2Wave NPS Survey + Unsubscribe
 *
 * This script handles both:
 * 1. Survey responses (existing functionality)
 * 2. Unsubscribe requests (new functionality)
 *
 * Spreadsheet ID: 1lOLAtgFs0rNvbmxho3qX2xMEZGs7Ba8jL9H7xosNz8s
 *
 * Sheets:
 * - "Responses" (existing) - NPS Survey responses
 * - "Unsubscribe" (new) - Email unsubscribe log
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
    Logger.log('Received data: ' + JSON.stringify(data));

    // Check if this is an unsubscribe request
    if (data.sheet === 'Unsubscribe') {
      return handleUnsubscribe(ss, data);
    } else {
      // Handle regular survey response (existing functionality)
      return handleSurveyResponse(ss, data);
    }

  } catch (error) {
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
 * Handle survey responses (existing functionality)
 */
function handleSurveyResponse(ss, data) {
  Logger.log('Processing survey response');

  // Get or create "Responses" sheet
  let sheet = ss.getSheetByName('Responses');
  if (!sheet) {
    Logger.log('Creating Responses sheet');
    sheet = ss.insertSheet('Responses');

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
