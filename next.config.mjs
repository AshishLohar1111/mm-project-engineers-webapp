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
  // Adjust paths so the app works under /mm-project-engineers-webapp on GitHub Pages
  basePath: isProd ? "/mm-project-engineers-webapp" : "",
  assetPrefix: isProd ? "/mm-project-engineers-webapp/" : "",
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
