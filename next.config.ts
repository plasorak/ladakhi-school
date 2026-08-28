import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
  // Allow loading the dev server from other devices on the LAN (e.g. testing on
  // a phone). Dev-only; has no effect on the static export.
  allowedDevOrigins: ["192.168.1.24", "*.local"],
};

export default nextConfig;
