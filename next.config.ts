import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export the site as static HTML so we can deploy to a static host
  output: 'export',
  images: {
    // Disable Next image optimization for static export; keep remote patterns for completeness
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
