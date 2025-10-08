import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { withSentryConfig } from '@sentry/nextjs';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  devIndicators: false,
  productionBrowserSourceMaps: true,
  experimental: {
    mdxRs: true,
  },
  serverExternalPackages: ['require-in-the-middle'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/missao-riachuelo',
        destination: '/pib-riachuelo',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // options: {
  //   remarkPlugins: [
  //     // Without options
  //     'remark-gfm',
  //     // With options
  //     ['remark-toc', { heading: 'The Table' }],
  //   ],
  //   rehypePlugins: [
  //     // Without options
  //     'rehype-slug',
  //     // With options
  //     ['rehype-katex', { strict: true, throwOnError: true }],
  //   ],
  // },
});

// Merge MDX config with Next.js config and wrap with Sentry
const sentryOptions: Record<string, unknown> = {
  // Optional: upload broader set of client files for better stack traces
  widenClientFileUpload: true,

  // Ensure sourcemap upload is enabled
  sourcemaps: {
    disable: false,
  },
};

if (process.env.SENTRY_AUTH_TOKEN) sentryOptions['authToken'] = process.env.SENTRY_AUTH_TOKEN;
if (process.env.SENTRY_ORG) sentryOptions['org'] = process.env.SENTRY_ORG;
if (process.env.SENTRY_PROJECT) sentryOptions['project'] = process.env.SENTRY_PROJECT;
if (process.env.SENTRY_URL) sentryOptions['sentryUrl'] = process.env.SENTRY_URL;

export default withSentryConfig(withMDX(nextConfig), sentryOptions);
