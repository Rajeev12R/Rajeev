import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
    ],
  },
  experimental: {
    // turbopack property removed as it is not valid
  },
};

export default nextConfig;
