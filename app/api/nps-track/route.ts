// nps-track-nextjs.ts
import { NextRequest, NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyLUPg4vJJ0w3FwvRtJpAf_CdDBNuS1dF5Je4wf2ZV7tKnojGmmyzTwTRxQwtanljI8/exec';

// App Router version
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const user = searchParams.get('user') || 'unknown';
  const answer = searchParams.get('answer') || 'unknown';

  // Log the response (don't await - fire and forget so redirect is instant)
  logResponse(user, answer, request);

  // Redirect to YOUR survey page (not external Survicate)
  const redirectUrl = new URL('/nps-survey', request.url);
  redirectUrl.searchParams.set('email', user);
  redirectUrl.searchParams.set('initial_answer', answer);

  return NextResponse.redirect(redirectUrl, 302);
}

async function logResponse(user: string, answer: string, request: NextRequest) {
  const timestamp = new Date().toISOString();
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, answer, timestamp, ip, userAgent })
    });
  } catch (error) {
    console.error('Failed to log response:', error);
  }
}