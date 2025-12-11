// For Next.js App Router: app/api/nps-track/route.ts
// For Pages Router: pages/api/nps-track.ts

// For Next.js App Router: app/api/nps-track/route.ts
// For Pages Router: pages/api/nps-track.ts

import { NextRequest, NextResponse } from 'next/server';

const SURVICATE_URL = 'https://survey.survicate.com/0b81786631a86a8a/';
const APPS_SCRIPT_URL = '"https://script.google.com/macros/s/AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8/exec'; // Replace with your deployment URL

// App Router version
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const user = searchParams.get('user') || 'unknown';
  const answer = searchParams.get('answer') || 'unknown';

  // Log the response (don't await - fire and forget so redirect is instant)
  logResponse(user, answer, request);

  // Build redirect URL with user email
  const redirectUrl = `${SURVICATE_URL}?p=${encodeURIComponent(user)}`;

  // Server-side redirect (works in ALL browsers, no blocking)
  return NextResponse.redirect(redirectUrl, 302);
}

async function logResponse(user: string, answer: string, request: NextRequest) {
  const timestamp = new Date().toISOString();
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  // Send to Google Sheets via Apps Script
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, answer, timestamp, ip, userAgent })
    });
  } catch (error) {
    console.error('Failed to log response:', error);
    // Don't block the redirect if logging fails
  }
}

/*
 * Pages Router version (if using Next.js 12 or older)
 *
 * import type { NextApiRequest, NextApiResponse } from 'next';
 *
 * export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 *   const { user = 'unknown', answer = 'unknown' } = req.query;
 *
 *   // Log the response
 *   const timestamp = new Date().toISOString();
 *   const ip = req.headers['x-forwarded-for'] || 'unknown';
 *   const userAgent = req.headers['user-agent'] || 'unknown';
 *
 *   try {
 *     await fetch(APPS_SCRIPT_URL, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ user, answer, timestamp, ip, userAgent })
 *     });
 *   } catch (error) {
 *     console.error('Failed to log response:', error);
 *   }
 *
 *   // Redirect to Survicate
 *   const redirectUrl = `${SURVICATE_URL}?p=${encodeURIComponent(user as string)}`;
 *   res.redirect(302, redirectUrl);
 * }
 */
