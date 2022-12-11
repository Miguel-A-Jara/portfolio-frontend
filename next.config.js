/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [process.env.IMG_HOST, 'raw.githubusercontent.com', 'github.com']
  }
}

module.exports = nextConfig
