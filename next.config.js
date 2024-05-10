/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fsw-store.s3.sa-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
