'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Monitoring() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </>
  );
}
