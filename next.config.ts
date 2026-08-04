import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/?contact=true",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
