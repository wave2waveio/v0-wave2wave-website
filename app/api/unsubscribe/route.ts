import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script URL for the same spreadsheet (NPS Survey responses)
// Sheet name: "Unsubscribe"
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8/exec';

// GET endpoint for email unsubscribe links (captures email and redirects to confirmation page)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email') || 'unknown';

  // Extract User-Agent for scanner detection
  const userAgent = request.headers.get('user-agent') || 'unknown';

  console.log('=== UNSUBSCRIBE REQUEST ===');
  console.log('Email:', email);
  console.log('User-Agent:', userAgent);

  try {
    // Prepare data for Google Sheets "Unsubscribe" tab
    const unsubscribeData = {
      sheet: 'Unsubscribe', // Target the Unsubscribe sheet
      email: email,
      datetime: new Date().toISOString(),
      user_agent: userAgent,
    };

    console.log('Unsubscribe data:', unsubscribeData);

    // Submit to Google Sheets
    console.log(`Posting to Google Apps Script: ${APPS_SCRIPT_URL}`);
    const gsResponse = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(unsubscribeData)
    });

    console.log('Google Sheets response status:', gsResponse.status);
    const gsResponseText = await gsResponse.text();
    console.log('Google Sheets response body:', gsResponseText);

    if (!gsResponse.ok) {
      console.error('Google Sheets submission failed:', gsResponse.status, gsResponseText);
    }

    console.log('=== UNSUBSCRIBE LOGGED SUCCESSFULLY ===');
  } catch (error) {
    console.error('=== UNSUBSCRIBE ERROR ===');
    console.error('Failed to log unsubscribe:', error);
    // Still redirect to confirmation page even if logging fails
  }

  // Redirect to unsubscribe confirmation page
  const redirectUrl = new URL('/unsubscribe-confirmation', request.url);
  redirectUrl.searchParams.set('email', email);

  return NextResponse.redirect(redirectUrl, 302);
}
