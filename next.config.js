/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files, so the site can be hosted on GitHub Pages.
  output: 'export',
  // Every page becomes folder/index.html, so /privacy/ works on any static host.
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
