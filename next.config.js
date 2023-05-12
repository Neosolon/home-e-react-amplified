/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //change to true when not in development
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
