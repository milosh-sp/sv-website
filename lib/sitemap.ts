/**
 * Sitemap generation utilities for SkillVerdict
 */

import { siteConfig } from "./seo"

export interface SitemapEntry {
  url: string
  lastModified?: Date
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

// Static pages configuration
export const staticPages: SitemapEntry[] = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: "/privacy-policy",
    lastModified: new Date("2024-12-01"),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: "/terms-of-service",
    lastModified: new Date("2024-12-01"),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  // {
  //   url: "/about",
  //   lastModified: new Date(),
  //   changeFrequency: "monthly",
  //   priority: 0.8,
  // },
  // {
  //   url: "/contact",
  //   lastModified: new Date(),
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // },
]

export function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map((entry) => {
      const url = `${siteConfig.url}${entry.url}`
      const lastmod = entry.lastModified?.toISOString().split("T")[0]
      
      return `  <url>
    <loc>${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ""}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ""}
  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

export function generateSitemapIndex(sitemaps: Array<{ url: string; lastModified?: Date }>): string {
  const sitemapEntries = sitemaps
    .map((sitemap) => {
      const lastmod = sitemap.lastModified?.toISOString().split("T")[0]
      
      return `  <sitemap>
    <loc>${siteConfig.url}${sitemap.url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
  </sitemap>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`
}

// Image sitemap generation
export interface ImageSitemapEntry {
  url: string
  images: Array<{
    url: string
    caption?: string
    title?: string
    license?: string
  }>
}

export function generateImageSitemapXML(entries: ImageSitemapEntry[]): string {
  const urlEntries = entries
    .map((entry) => {
      const imageEntries = entry.images
        .map((image) => {
          return `    <image:image>
      <image:loc>${image.url}</image:loc>
      ${image.caption ? `<image:caption>${image.caption}</image:caption>` : ""}
      ${image.title ? `<image:title>${image.title}</image:title>` : ""}
      ${image.license ? `<image:license>${image.license}</image:license>` : ""}
    </image:image>`
        })
        .join("\n")

      return `  <url>
    <loc>${siteConfig.url}${entry.url}</loc>
${imageEntries}
  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`
}

// Static image entries for current pages
export const staticImageEntries: ImageSitemapEntry[] = [
  {
    url: "/",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        caption: "SkillVerdict - Monetize Your Expertise as a Developer",
        title: "SkillVerdict Homepage",
      },
      {
        url: `${siteConfig.url}/placeholder-logo.svg`,
        caption: "SkillVerdict Logo",
        title: "SkillVerdict Brand Logo",
      },
    ],
  },
]
