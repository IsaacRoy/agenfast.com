import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      // Serve AgenFast logo for favicon.ico so browsers and Vercel don't show default icon
      { source: "/favicon.ico", destination: "/agenfast-logo.png" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
