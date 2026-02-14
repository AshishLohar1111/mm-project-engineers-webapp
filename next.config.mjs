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
  // GitHub Pages serves the site under /REPO_NAME; set basePath and assetPrefix
  basePath: "/mm-project-engineers-webapp",
  assetPrefix: "/mm-project-engineers-webapp",
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
