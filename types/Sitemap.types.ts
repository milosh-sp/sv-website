import type { MetadataRoute } from 'next'

interface VideoMetadata {
  title: string
  description: string
  thumbnail_loc: string
  content_loc?: string
  player_loc?: string
  duration?: number
  expiration_date?: string
  rating?: number
  view_count?: number
  publication_date?: string
  family_friendly?: 'yes' | 'no'
  restriction?: {
    relationship: 'allow' | 'deny'
    content: string
  }
  platform?: {
    relationship: 'allow' | 'deny'
    content: string
  }
  requires_subscription?: 'yes' | 'no'
  uploader?: {
    info?: string
    content: string
  }
  live?: 'yes' | 'no'
  tag?: string[]
  page_route?: string
}

interface PageEntry {
  path: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  images?: NonNullable<MetadataRoute.Sitemap[number]['images']>
  videos?: NonNullable<MetadataRoute.Sitemap[number]['videos']>
}

interface VideoToPageMap {
  [videoFileName: string]: string[]
}

export type { VideoMetadata, PageEntry, VideoToPageMap }
