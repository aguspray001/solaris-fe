/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PHONE_NUMBER: process.env.PHONE_NUMBER,
  }
}

module.exports = nextConfig
