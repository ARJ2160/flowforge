import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@flowforge/shared-utils"]
}

export default nextConfig
