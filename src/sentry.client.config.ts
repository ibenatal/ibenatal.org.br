import * as Sentry from '@sentry/nextjs';

const dsn = process.env['SENTRY_DSN'] || process.env['NEXT_PUBLIC_SENTRY_DSN'];
const environment = process.env['SENTRY_ENVIRONMENT'] || process.env.NODE_ENV;

if (dsn) {
  Sentry.init({
    dsn,
    environment,
    tracesSampleRate: 0.1,
    sendDefaultPii: true,
  });
}
