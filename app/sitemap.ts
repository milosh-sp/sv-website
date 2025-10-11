import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://skillverdict.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/og-image.jpg`,
        `${baseUrl}/og-image.svg`,
        `${baseUrl}/placeholder-logo.png`,
        `${baseUrl}/placeholder-user.jpg`,
        `${baseUrl}/placeholder.jpg`,
      ],
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}