import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Without this, phones opening the dev server via LAN IP never hydrate (no taps work).
  allowedDevOrigins: ["10.*.*.*", "192.168.*.*", "172.*.*.*", "*.local"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
