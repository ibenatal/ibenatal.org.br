import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  devIndicators: false,
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
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

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
