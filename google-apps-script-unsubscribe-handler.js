/**
 * Google Apps Script for handling Wave2Wave NPS Survey + Email Responses + Unsubscribe
 *
 * This script handles three types of data:
 * 1. Email responses (initial question clicks) - IMMEDIATE logging with scanner detection
 * 2. Full survey responses (complete survey submissions)
 * 3. Unsubscribe requests - with scanner detection
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

/**
 * Comprehensive scanner detection with multi-signal scoring
 * @param {Object} requestData - All request metadata
 * @returns {Object} - { suspected: boolean, score: number, signals: string }
 */
function detectScanner(requestData) {
  let score = 0;
  const signals = [];

  const ua = (requestData.user_agent || '').toLowerCase();
  const acceptLang = (requestData.accept_language || '').toLowerCase();
  const referer = (requestData.referer || '').toLowerCase();
  const accept = (requestData.accept || '').toLowerCase();

  // Signal 1: Known scanner User-Agent patterns (weight: 3)
  const scannerPatterns = [
    'cisco', 'ironport', 'proofpoint', 'mimecast',
    'barracuda', 'safelnks', 'safelinks', 'atp',
    'bot', 'crawler', 'scanner', 'spider',
    'linkvalidator', 'urldefense'
  ];

  if (scannerPatterns.some(pattern => ua.includes(pattern))) {
    score += 3;
    signals.push('scanner_ua');
  }

  // Signal 2: Missing or suspicious Accept-Language (weight: 2)
  if (!acceptLang || acceptLang === 'unknown' || acceptLang === '*') {
    score += 2;
    signals.push('missing_language');
  }

  // Signal 3: Missing Referer from email (weight: 1)
  if (!referer || referer === 'unknown') {
    score += 1;
    signals.push('no_referer');
  }

  // Signal 4: Generic or missing Accept header (weight: 2)
  if (!accept || accept === 'unknown' || accept === '*/*') {
    score += 2;
    signals.push('generic_accept');
  }

  // Signal 5: Standard browser User-Agent but with scanner patterns (weight: 1)
  // Example: "Mozilla/5.0... Chrome/133.0" (looks real) but has other signals
  if (ua.includes('mozilla') && ua.includes('chrome') && signals.length > 1) {
    score += 1;
    signals.push('masked_scanner');
  }

  // Threshold: Score >= 5 = likely scanner
  return {
    suspected: score >= 5,
    score: score,
    signals: signals.join(',')
  };
}

/**
 * Detect if this email has multiple different answers in rapid succession
 * Scanners click ALL links within seconds
 * @param {Object} sheet - EmailResponse sheet
 * @param {string} userEmail - User's email
 * @param {string} currentAnswer - Current answer being logged
 * @returns {boolean} - True if rapid multi-click detected
 */
function detectRapidMultiClick(sheet, userEmail, currentAnswer) {
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return false; // No previous entries

  // Check last 50 entries for same email with different answers
  const numRowsToCheck = Math.min(50, lastRow - 1);
  const startRow = lastRow - numRowsToCheck + 1;
  const recentEntries = sheet.getRange(startRow, 1, numRowsToCheck, 3).getValues();

  const now = new Date();
  const tenSecondsAgo = new Date(now.getTime() - 10000); // 10 seconds

  let differentAnswers = [];

  for (let i = 0; i < recentEntries.length; i++) {
    const entryDateRaw = recentEntries[i][0];
    const entryEmail = String(recentEntries[i][1]).trim();
    const entryAnswer = String(recentEntries[i][2]).trim();

    let entryDate = entryDateRaw instanceof Date
      ? entryDateRaw
      : new Date(entryDateRaw);

    // Same email, different answer, within last 10 seconds
    if (entryEmail === userEmail &&
        entryAnswer !== currentAnswer &&
        entryDate >= tenSecondsAgo) {
      differentAnswers.push(entryAnswer);
    }
  }

  // If 2+ different answers within 10 seconds = scanner pattern
  return differentAnswers.length >= 2;
}

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

    // Add headers (9 columns with multi-signal detection)
    const headers = [
      'email',
      'DateTime',
      'UserAgent',
      'AcceptLanguage',
      'Referer',
      'IP Address',
      'ScannerScore',
      'ScannerSignals',
      'ScannerSuspected'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Prepare all request data for detection
  const email = data.email || '';
  const datetime = data.datetime || new Date().toISOString();
  const requestData = {
    user_agent: data.user_agent || 'unknown',
    accept_language: data.accept_language || 'unknown',
    referer: data.referer || 'unknown',
    accept: data.accept || 'unknown',
    connection: data.connection || 'unknown'
  };

  // Run multi-signal detection
  const detection = detectScanner(requestData);

  Logger.log('Logging unsubscribe: ' + email);
  Logger.log('Scanner detection score: ' + detection.score);
  Logger.log('Scanner signals: ' + detection.signals);
  Logger.log('Scanner suspected: ' + detection.suspected);

  // Append with all 9 columns
  sheet.appendRow([
    email,
    datetime,
    requestData.user_agent,
    requestData.accept_language,
    requestData.referer,
    data.ip_address || 'unknown',
    detection.score,
    detection.signals,
    detection.suspected
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

    // Add headers (10 columns with multi-signal detection)
    const headers = [
      'DateTime',
      'User Email',
      'Answer',
      'UserAgent',
      'AcceptLanguage',
      'Referer',
      'IP Address',
      'ScannerScore',
      'ScannerSignals',
      'ScannerSuspected'
    ];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  // Prepare data
  const datetime = data.datetime || new Date().toISOString();
  const userEmail = data.user_email || '';
  const answer = data.answer || '';
  const requestData = {
    user_agent: data.user_agent || 'unknown',
    accept_language: data.accept_language || 'unknown',
    referer: data.referer || 'unknown',
    accept: data.accept || 'unknown',
    connection: data.connection || 'unknown'
  };

  Logger.log('Checking for duplicates: ' + userEmail + ' - ' + answer);

  // Check for duplicate entries within the last 30 seconds
  // This prevents multiple clicks/browser prefetch from creating duplicates
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    // Get the last 50 rows (increased from 20 to catch more scanner patterns)
    const numRowsToCheck = Math.min(50, lastRow - 1);
    const startRow = lastRow - numRowsToCheck + 1;
    const recentEntries = sheet.getRange(startRow, 1, numRowsToCheck, 3).getValues();

    const now = new Date();
    const thirtySecondsAgo = new Date(now.getTime() - 30000); // 30 seconds ago
    const tenSecondsAgo = new Date(now.getTime() - 10000); // 10 seconds for ANY answer check

    Logger.log('Checking last ' + numRowsToCheck + ' entries for duplicates');
    Logger.log('Current time: ' + now.toISOString());
    Logger.log('Cutoff time (same answer): ' + thirtySecondsAgo.toISOString());
    Logger.log('Cutoff time (any answer): ' + tenSecondsAgo.toISOString());

    for (let i = recentEntries.length - 1; i >= 0; i--) {
      const entryDateRaw = recentEntries[i][0];
      const entryEmail = String(recentEntries[i][1]).trim();
      const entryAnswer = String(recentEntries[i][2]).trim();

      // Convert to Date object (handles both Date objects and ISO strings)
      let entryDate;
      if (entryDateRaw instanceof Date) {
        entryDate = entryDateRaw;
      } else {
        entryDate = new Date(entryDateRaw);
      }

      Logger.log('Row ' + (startRow + i) + ': ' + entryEmail + ' / ' + entryAnswer + ' / ' + entryDate.toISOString());

      // Check 1: Exact duplicate (same email + same answer within 30 seconds)
      if (entryEmail === userEmail &&
          entryAnswer === answer &&
          entryDate >= thirtySecondsAgo) {
        Logger.log('>>> EXACT DUPLICATE DETECTED - Skipping (entry from ' + entryDate.toISOString() + ')');
        Logger.log('Match: ' + entryEmail + ' === ' + userEmail + ' && ' + entryAnswer + ' === ' + answer);
        return ContentService
          .createTextOutput(JSON.stringify({
            success: true,
            message: 'Duplicate skipped',
            duplicate: true
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      // Check 2: Scanner pattern (same email with ANY answer within 10 seconds = scanner clicking all links)
      if (entryEmail === userEmail &&
          entryDate >= tenSecondsAgo) {
        Logger.log('>>> SCANNER DUPLICATE DETECTED - Same email with different answer within 10 seconds');
        Logger.log('Previous answer: ' + entryAnswer + ' at ' + entryDate.toISOString());
        Logger.log('Current answer: ' + answer + ' - SKIPPING as likely scanner');
        return ContentService
          .createTextOutput(JSON.stringify({
            success: true,
            message: 'Scanner duplicate skipped',
            duplicate: true,
            scanner_pattern: true
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
  }

  Logger.log('No duplicate found - Logging email response: ' + userEmail + ' - ' + answer);

  // Run multi-signal detection
  const detection = detectScanner(requestData);

  // Check for rapid multi-click pattern
  const hasRapidMultiClick = detectRapidMultiClick(sheet, userEmail, answer);
  if (hasRapidMultiClick) {
    detection.score += 3;
    detection.signals += (detection.signals ? ',rapid_multi_click' : 'rapid_multi_click');
    detection.suspected = detection.score >= 5;
    Logger.log('>>> RAPID MULTI-CLICK DETECTED <<<');
  }

  Logger.log('Scanner detection score: ' + detection.score);
  Logger.log('Scanner signals: ' + detection.signals);
  Logger.log('Scanner suspected: ' + detection.suspected);

  // Append with all 10 columns
  sheet.appendRow([
    datetime,
    userEmail,
    answer,
    requestData.user_agent,
    requestData.accept_language,
    requestData.referer,
    data.ip_address || 'unknown',
    detection.score,
    detection.signals,
    detection.suspected
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
