/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:id",
        destination: "https://billions-api.nomadcoders.workers.dev/person/:id",
      }
    ]
  }
}

module.exports = nextConfig
