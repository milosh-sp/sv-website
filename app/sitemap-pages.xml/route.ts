/**
 * Pages sitemap route
 */

import { generateSitemapXML, staticPages } from "@/lib/sitemap"

// Required for static export
export const dynamic = "force-static"

export async function GET() {
  // In the future, you can add dynamic pages here
  // For example, user profiles, blog posts, etc.
  const allPages = [...staticPages]

  const sitemapXML = generateSitemapXML(allPages)

  return new Response(sitemapXML, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
