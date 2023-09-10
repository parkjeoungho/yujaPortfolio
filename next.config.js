/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
