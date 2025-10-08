'use client';

import * as Sentry from '@sentry/nextjs';

export default function ClienteError() {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          throw new Error('Cliente Error1');
        }}
      >
        Error1
      </button>
      <button
        type="button"
        onClick={() => {
          try {
            throw new Error('Cliente Error2');
          } catch (err) {
            Sentry.captureException(err);
            throw err;
          }
        }}
      >
        Error2
      </button>
    </div>
  );
}
