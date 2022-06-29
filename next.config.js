/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
  darkMode: false,
  env: {
    PHONE_NUMBER: process.env.PHONE_NUMBER,
  }
}

module.exports = nextConfig
