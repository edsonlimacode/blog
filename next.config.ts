import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000"
      }
    ]
  }
}

export default nextConfig
