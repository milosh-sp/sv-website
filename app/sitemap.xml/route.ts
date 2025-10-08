/**
 * Main sitemap index route
 */

import { generateSitemapIndex } from "@/lib/sitemap"

// Required for static export
export const dynamic = "force-static"

export async function GET() {
  const sitemaps = [
    {
      url: "/sitemap-pages.xml",
      lastModified: new Date(),
    },
    {
      url: "/sitemap-images.xml", 
      lastModified: new Date(),
    },
  ]

  const sitemapXML = generateSitemapIndex(sitemaps)

  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
