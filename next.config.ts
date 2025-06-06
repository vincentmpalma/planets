import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'solarsystem.nasa.gov',
      },
    ],
  },
};

export default nextConfig;
