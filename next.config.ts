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
    domains: [
      "go.forrester.com", // add any other domains you use for images
    ],
  },
  experimental: {
    // turbopack property removed as it is not valid
  },
};

export default nextConfig;
