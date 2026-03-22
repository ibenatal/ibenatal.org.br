declare namespace NodeJS {
  interface ProcessEnv {
    BUILD_TIMESTAMP?: string;
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_SENTRY_DSN?: string;
    SENTRY_AUTH_TOKEN?: string;
    SENTRY_ORG?: string;
    SENTRY_PROJECT?: string;
    SENTRY_URL?: string;
    NEXT_RUNTIME?: 'nodejs' | 'edge';
    NODE_ENV?: 'development' | 'test' | 'production';
    SENTRY_DSN?: string;
  }
}
