/** @type {import("next").NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "http://parkjeoungho.github.io/yujaPortfolio";

const nextConfig = {
  basePath: "/yujaPortfolio",
  trailingSlash: true,
}

module.exports = nextConfig;
