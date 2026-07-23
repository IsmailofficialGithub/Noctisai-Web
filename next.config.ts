import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export for Vercel/Netlify
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
