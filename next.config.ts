import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
    ],
  },
};

export default nextConfig;
