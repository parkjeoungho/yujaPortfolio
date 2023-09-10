/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  images: {
    domains: ["loremflickr.com", "d4mcg1l3fmmr.cloudfront.net", "picsum.photos"],
  },
};

module.exports = nextConfig;
