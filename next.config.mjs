/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable static export for GitHub Pages
  output: "export",
  // Output to docs folder for GitHub Pages
  distDir: "docs",
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
