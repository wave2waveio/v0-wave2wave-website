/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app'],
    },
  },
  async headers() {
    return [
      {
        // This applies the relaxed CSP only to the /nps-survey page
        source: "/nps-survey",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.gstatic.com; " +
              "frame-src https: http:; " +
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com wss://localhost:3000; " +
              "img-src 'self' data: https: blob: https://www.google-analytics.com; " +
              "font-src 'self' data: https://fonts.gstatic.com; " +
              "media-src 'self' https: blob:; " +
              "worker-src 'self' blob:;",
          },
        ],
      },
    ]
  },
}

export default nextConfig
