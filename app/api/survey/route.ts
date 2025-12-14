import { NextRequest, NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8/exec';

// GET endpoint for email campaign links (redirects to survey page)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const user = searchParams.get('user') || 'unknown';
  const answer = searchParams.get('answer') || 'unknown';

  console.log('=== EMAIL RESPONSE CLICKED ===');
  console.log('User:', user);
  console.log('Answer:', answer);

  try {
    // Immediately log the email response to "EmailResponse" sheet
    const emailResponseData = {
      sheet: 'EmailResponse', // Target the EmailResponse sheet
      datetime: new Date().toISOString(),
      user_email: user,
      answer: answer,
    };

    console.log('Logging email response:', emailResponseData);

    // Submit to Google Sheets
    const gsResponse = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailResponseData)
    });

    console.log('Email response logged, status:', gsResponse.status);

    if (!gsResponse.ok) {
      console.error('Failed to log email response:', gsResponse.status);
    }
  } catch (error) {
    console.error('Error logging email response:', error);
    // Continue to redirect even if logging fails
  }

  // Redirect to survey page with parameters
  const redirectUrl = new URL('/nps-survey', request.url);
  redirectUrl.searchParams.set('email', user);
  redirectUrl.searchParams.set('initial_answer', answer);

  return NextResponse.redirect(redirectUrl, 302);
}

// POST endpoint for full survey submission
export async function POST(request: NextRequest) {
  console.log('=== API /survey POST endpoint called ===');

  try {
    const body = await request.json();
    console.log('Request body:', body);

    const { email, source, initial_answer, survey_data } = body;
    console.log('Extracted:', { email, source, initial_answer });
    console.log('Survey data keys:', Object.keys(survey_data || {}));

    // Map survey data to match exact Google Sheets column structure
    const sheetData = {
      // Column 1: Timestamp
      timestamp: new Date().toISOString(),

      // Column 2: User Email
      user_email: email || '',

      // Column 3: Answer (from initial email response)
      answer: initial_answer || '',

      // Column 4: First Name
      first_name: '',

      // Column 5: Last Name
      last_name: '',

      // Column 6: Email
      email: email || '',

      // Column 7: Do you plan to order from Wave2Wave.io in the future?
      future_orders: survey_data?.future_orders || '',

      // Column 8: How likely are you to recommend Wave2Wave to a colleague or peer?
      nps_rating: survey_data?.nps_rating || '',

      // Column 9: Which Wave2Wave products or services have you used?
      products_used: Array.isArray(survey_data?.products_used)
        ? survey_data.products_used.join(', ')
        : survey_data?.products_used || '',

      // Column 10: Product quality
      satisfaction_quality: survey_data?.satisfaction_ratings?.Quality || '',

      // Column 11: Customization options
      satisfaction_customization: survey_data?.satisfaction_ratings?.Customization || '',

      // Column 12: Delivery speed
      satisfaction_delivery: survey_data?.satisfaction_ratings?.Delivery || '',

      // Column 13: Labeling & documentation
      satisfaction_labeling: survey_data?.satisfaction_ratings?.Labeling || '',

      // Column 14: Sales responsiveness
      satisfaction_sales: survey_data?.satisfaction_ratings?.Sales || '',

      // Column 15: Technical support
      satisfaction_support: survey_data?.satisfaction_ratings?.Support || '',

      // Column 16: Pricing/value
      satisfaction_pricing: survey_data?.satisfaction_ratings?.Pricing || '',

      // Column 17: What could we improve?
      improvements: survey_data?.improvements || '',

      // Column 18: Are there products or services you wish Wave2Wave offered that we currently don't?
      missing_products: survey_data?.missing_products || '',

      // Column 19: Do you have any upcoming projects where Wave2Wave could help?
      upcoming_projects: survey_data?.upcoming_projects || '',

      // Column 20: Do you have any upcoming projects where Wave2Wave could help? - Contact info
      project_contact: survey_data?.project_contact || '',

      // Column 21: What best describes your role?
      role: Array.isArray(survey_data?.role)
        ? survey_data.role.join(', ')
        : survey_data?.role || '',

      // Column 22: What type of organization do you work for?
      organization_type: Array.isArray(survey_data?.organization_type)
        ? survey_data.organization_type.join(', ')
        : survey_data?.organization_type || '',

      // Column 23: May we follow up with you about your feedback?
      may_followup: survey_data?.may_followup || '',

      // Column 24: May we follow up with you about your feedback? - Contact info
      followup_contact: survey_data?.followup_contact || '',
    };

    console.log('Sheet data prepared:', sheetData);

    // Submit to Google Sheets
    console.log(`Posting to Google Apps Script: ${APPS_SCRIPT_URL}`);
    const gsResponse = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetData)
    });

    console.log('Google Sheets response status:', gsResponse.status);
    const gsResponseText = await gsResponse.text();
    console.log('Google Sheets response body:', gsResponseText);

    if (!gsResponse.ok) {
      console.error('Google Sheets submission failed:', gsResponse.status, gsResponseText);
    }

    console.log('=== API /survey completed successfully ===');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('=== API /survey ERROR ===');
    console.error('Failed to submit survey:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit survey' },
      { status: 500 }
    );
  }
}
