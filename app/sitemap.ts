import type { MetadataRoute } from 'next'
import { siteConfig, sitemapConfig } from '@/lib/seo-config'

export const dynamic = 'force-static'

/**
 * Generates sitemap for the application
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapConfig.pages.map((page) => {
    const result: MetadataRoute.Sitemap[number] = {
      url: page.url ? `${siteConfig.baseUrl}${page.url}` : siteConfig.baseUrl,
      lastModified: page.lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }

    // Only add images if they exist
    if ('images' in page && page.images) {
      result.images = page.images.map(
        (image) => `${siteConfig.baseUrl}${image}`
      )
    }

    return result
  })
}
