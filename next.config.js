/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    API_URL: "http://staging.auth.atmua.pelumiakinrele.site/api/v1",
  },
};
module.exports = nextConfig;
