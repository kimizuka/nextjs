import type { NextConfig } from 'next';

const repositoryName: string = 'nextjs';
const isProduction: boolean = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  ...(isProduction
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
};

export default nextConfig;
