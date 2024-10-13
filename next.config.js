/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // You can set this to any domain if you want to allow from specific domains, or use * as hostname to allow everything
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all domains using HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // Allow all domains using HTTP
      },
    ],
  },
};

module.exports = nextConfig;  
