/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3.bp.blogspot.com',  // Dominio para imágenes remotas
        pathname: '/**',
      },
    ],
    unoptimized: false, // Habilitar optimización de imágenes
  },
  // Configuración para permitir solicitudes de origen cruzado
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Optimizaciones para producción
  reactStrictMode: true, // Habilitar modo estricto de React
  poweredByHeader: false, // Ocultar el encabezado X-Powered-By
};

// Exporta la configuración correctamente utilizando `export default`
export default nextConfig;
