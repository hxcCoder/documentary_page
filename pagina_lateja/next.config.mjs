/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  
  // Configuración experimental
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Configuración de redirects
  async redirects() {
    return [
      {
        source: '/documentales',
        destination: '/proyectos/documentales',
        permanent: true,
      },
      {
        source: '/cronicas',
        destination: '/proyectos/cronicas',
        permanent: true,
      },
      {
        source: '/fotografia',
        destination: '/proyectos/fotografia',
        permanent: true,
      },
    ]
  },
  
  // Configuración de ESLint y TypeScript
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
