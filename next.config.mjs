/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Note: headers() and redirects() are not compatible with static export
  // For production, implement these at the hosting level:
  // - Netlify: _headers and _redirects files
  // - Vercel: vercel.json configuration
  // - Cloudflare Pages: _headers and _redirects files
  // - Apache: .htaccess file
  // - Nginx: server configuration

  // SEO and Performance Optimizations
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
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

export default nextConfig
