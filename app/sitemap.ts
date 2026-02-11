import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'
import { discoverPages } from '@/lib/sitemap-generator'
import type { PageEntry } from '@/lib/sitemap-generator'

export const dynamic = 'force-static'

/**
 * Generates a fully dynamic sitemap for the application
 * Automatically discovers and includes all pages from the /app directory
 * New pages are automatically included without manual sitemap updates
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Discover all pages from the app directory at build time
  const pages = await discoverPages()

  // Convert pages to sitemap entries
  return pages.map((page: PageEntry) => {
    const sitemapEntry: MetadataRoute.Sitemap[number] = {
      url: `${siteConfig.baseUrl}${page.path}`,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      images: page.images,
      videos: page.videos,
    }

    return sitemapEntry
  })
}
