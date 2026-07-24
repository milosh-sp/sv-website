interface PageMetadata {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonical?: string
  alternates?: {
    languages?: Record<string, string>
  }
}

export type { PageMetadata }
