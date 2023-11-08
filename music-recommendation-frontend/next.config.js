/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
          {
            source: '/api/server/:path*',
            destination: 'http://127.0.0.1:5000/:path*',
            permanent: true
          },
        ]
      },
}

module.exports = nextConfig
