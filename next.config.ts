import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
    }
    return config;
  },
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
