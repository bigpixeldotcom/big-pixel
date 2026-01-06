import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { withBotId } from 'botid/next/config';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/api/c15t/:path*',
        destination: `${process.env.NEXT_PUBLIC_C15T_URL}/:path*`,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withBotId(withMDX(nextConfig));
