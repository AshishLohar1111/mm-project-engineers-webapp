/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  // Enable static export for GitHub Pages
  output: "export",
  // Adjust paths so the app works under /mm-project-engineers-webapp on GitHub Pages
  basePath: isProd ? "/mm-project-engineers-webapp" : "",
  assetPrefix: isProd ? "/mm-project-engineers-webapp/" : ""
};

export default nextConfig;

