import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/web-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
