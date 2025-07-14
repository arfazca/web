/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  // Optional: Reduce console noise in development
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;