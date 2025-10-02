import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones para producción
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Configuración de imágenes para Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lafysstpyiejevhrlmzc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      }
    ],
    // Optimización de imágenes
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Configuración para deployment en Vercel
  output: 'standalone',
  
  // Configuración del workspace root para evitar warnings
  outputFileTracingRoot: __dirname,
  
  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
