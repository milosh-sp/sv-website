/**
 * Images sitemap route
 */

import { generateImageSitemapXML, staticImageEntries } from "@/lib/sitemap"

// Required for static export
export const dynamic = "force-static"

export async function GET() {
  const sitemapXML = generateImageSitemapXML(staticImageEntries)

  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
