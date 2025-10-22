/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false, // Clean URLs without trailing slashes

  // Image optimization for static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Generate static pages at build time
  generateEtags: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
