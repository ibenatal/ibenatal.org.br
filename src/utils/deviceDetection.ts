import { headers } from 'next/headers';

export async function isMobileDevice(): Promise<boolean> {
  try {
    const headersList = await headers();
    const userAgent = headersList.get('user-agent') || '';

    // Common mobile device patterns
    const mobilePatterns = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
      /Mobile/i,
    ];

    return mobilePatterns.some((pattern) => pattern.test(userAgent));
  } catch {
    // If headers are not available (e.g., during static rendering), assume desktop
    return false;
  }
}
