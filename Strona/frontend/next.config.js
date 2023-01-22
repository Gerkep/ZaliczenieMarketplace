/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
    images: {
      domains: [
        "gateway.pinatas.cloud",
        'drive.google.com'
      ],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
module.exports = nextConfig;
