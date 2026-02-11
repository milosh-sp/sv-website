import { readdir, stat, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { MetadataRoute } from 'next'
import { siteConfig } from './seo-config'

// ============================================================================
// TYPES
// ============================================================================

/**
 * Video metadata structure matching Next.js MetadataRoute.Sitemap video format
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#video-sitemaps
 */
export interface VideoMetadata {
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

export interface PageEntry {
  path: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  images?: NonNullable<MetadataRoute.Sitemap[number]['images']>
  videos?: NonNullable<MetadataRoute.Sitemap[number]['videos']>
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Default change frequency for pages
 * Can be customized per page if needed
 */
const DEFAULT_CHANGE_FREQUENCY: MetadataRoute.Sitemap[number]['changeFrequency'] =
  'weekly'

/**
 * Default priority for pages
 * Home page gets higher priority, other pages get standard priority
 */
const DEFAULT_PRIORITY = 0.8
const HOME_PRIORITY = 1.0

/**
 * Image file extensions to include in sitemap
 */
const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.svg',
  '.avif',
])

/**
 * Patterns to exclude from sitemap discovery
 */
const EXCLUDE_PATTERNS = {
  routeGroups: /^\(.*\)$/,
  privateFolder: /^_/,
  dynamicSegments: /^\[.*\]$/,
} as const

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if a folder name should be excluded from sitemap
 */
function shouldExcludeFolder(folderName: string): boolean {
  return (
    EXCLUDE_PATTERNS.routeGroups.test(folderName) ||
    EXCLUDE_PATTERNS.privateFolder.test(folderName) ||
    EXCLUDE_PATTERNS.dynamicSegments.test(folderName)
  )
}

/**
 * Check if a file is an image based on extension
 */
function isImageFile(fileName: string): boolean {
  const ext = fileName.toLowerCase().slice(fileName.lastIndexOf('.'))
  return IMAGE_EXTENSIONS.has(ext)
}

/**
 * Check if a file is a video metadata JSON file
 */
function isVideoMetadataFile(fileName: string): boolean {
  return fileName.toLowerCase().endsWith('.json')
}

/**
 * Get priority based on route depth and type
 * Home page gets highest priority, deeper routes get lower priority
 */
function getPriority(route: string): number {
  if (route === '/') {
    return HOME_PRIORITY
  }

  const depth = route.split('/').filter((segment) => segment).length
  return Math.max(0.5, DEFAULT_PRIORITY - depth * 0.1)
}

/**
 * Check if a page has noIndex set to true in its metadata
 * Returns true if the page should be excluded from sitemap
 */
function isPageNoIndex(route: string): boolean {
  const { pageSeoConfig } = require('./seo-config')

  const pageConfig = pageSeoConfig?.[route]

  if (!pageConfig) {
    console.warn(`[Sitemap Generator] No SEO config found for route: ${route}`)
    return false
  }

  return pageConfig?.noIndex === true
}

/**
 * Validate video metadata against Google's requirements and Next.js format
 */
function validateVideoMetadata(video: VideoMetadata): boolean {
  if (!video.title || video.title.length === 0) {
    console.warn('[Sitemap Generator] Video missing required field: title')
    return false
  }

  if (!video.description || video.description.length === 0) {
    console.warn(
      '[Sitemap Generator] Video missing required field: description'
    )
    return false
  }

  if (video.description.length > 2048) {
    console.warn(
      '[Sitemap Generator] Video description exceeds 2048 characters'
    )
    return false
  }

  if (!video.thumbnail_loc) {
    console.warn(
      '[Sitemap Generator] Video missing required field: thumbnail_loc'
    )
    return false
  }

  if (!video.content_loc && !video.player_loc) {
    console.warn(
      '[Sitemap Generator] Video must have either content_loc or player_loc'
    )
    return false
  }

  if (video.duration !== undefined) {
    if (video.duration < 1 || video.duration > 28800) {
      console.warn(
        '[Sitemap Generator] Video duration must be between 1 and 28800 seconds'
      )
      return false
    }
  }

  if (video.rating !== undefined) {
    if (video.rating < 0 || video.rating > 5) {
      console.warn(
        '[Sitemap Generator] Video rating must be between 0.0 and 5.0'
      )
      return false
    }
  }

  if (video.tag && video.tag.length > 32) {
    console.warn('[Sitemap Generator] Video cannot have more than 32 tags')
    return false
  }

  if (video.uploader?.content && video.uploader.content.length > 255) {
    console.warn(
      '[Sitemap Generator] Video uploader name cannot exceed 255 characters'
    )
    return false
  }

  return true
}

/**
 * Transform VideoMetadata to Next.js sitemap video format
 * Removes internal fields and ensures compatibility with MetadataRoute.Sitemap
 */
function transformToSitemapVideo(
  video: VideoMetadata
): NonNullable<MetadataRoute.Sitemap[number]['videos']>[number] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { page_route, ...sitemapVideo } = video
  return sitemapVideo as NonNullable<
    MetadataRoute.Sitemap[number]['videos']
  >[number]
}

// ============================================================================
// IMAGE DISCOVERY FUNCTION
// ============================================================================

/**
 * Recursively discover all image files in the public directory
 * Returns an array of image objects matching Next.js sitemap format
 */
async function discoverImagesRecursive(
  dirPath: string,
  basePath = ''
): Promise<NonNullable<MetadataRoute.Sitemap[number]['images']>> {
  const images: NonNullable<MetadataRoute.Sitemap[number]['images']> = []

  try {
    const entries = await readdir(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name)

      if (entry.isDirectory()) {
        const subPath = basePath ? `${basePath}/${entry.name}` : entry.name
        const subImages = await discoverImagesRecursive(fullPath, subPath)
        images.push(...subImages)
      } else if (entry.isFile() && isImageFile(entry.name)) {
        const relativePath = basePath
          ? `/${basePath}/${entry.name}`
          : `/${entry.name}`
        const absoluteUrl = `${siteConfig.baseUrl}${relativePath}`
        images.push(absoluteUrl)
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath} for images:`, error)
  }

  return images
}

// ============================================================================
// VIDEO DISCOVERY FUNCTION
// ============================================================================

/**
 * Recursively discover all video metadata JSON files in the videos directory
 * Returns an array of VideoMetadata objects
 */
async function discoverVideosRecursive(
  dirPath: string,
  basePath = ''
): Promise<VideoMetadata[]> {
  const videos: VideoMetadata[] = []

  try {
    const entries = await readdir(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name)

      if (entry.isDirectory()) {
        const subPath = basePath ? `${basePath}/${entry.name}` : entry.name
        const subVideos = await discoverVideosRecursive(fullPath, subPath)
        videos.push(...subVideos)
      } else if (entry.isFile() && isVideoMetadataFile(entry.name)) {
        try {
          const fileContent = await readFile(fullPath, 'utf-8')
          const rawData = JSON.parse(fileContent)

          // Transform raw JSON data to VideoMetadata format
          const videoMetadata: VideoMetadata = {
            // Mux playback_ids structure: [{ policy: 'public', id: 'xxx' }]
            title: rawData.title ?? rawData.name ?? '',
            description: rawData.description ?? '',
            thumbnail_loc: rawData.poster ?? '',
            player_loc: rawData.sources?.[0]?.src ?? '',
            content_loc: undefined,
            duration: rawData.duration
              ? Math.round(rawData.duration)
              : undefined,
            expiration_date: undefined,
            rating: undefined,
            view_count: rawData.view_count
              ? Number.parseInt(String(rawData.view_count), 10)
              : undefined,
            publication_date: rawData.created_at
              ? new Date(rawData.created_at * 1000).toISOString()
              : undefined,
            family_friendly: 'yes',
            restriction: undefined,
            platform: undefined,
            requires_subscription: 'no',
            uploader: rawData.uploader
              ? {
                  content: rawData.uploader.name ?? rawData.uploader,
                  info: rawData.uploader.url,
                }
              : undefined,
            live: rawData.live_stream_id ? 'yes' : 'no',
            tag: Array.isArray(rawData.tag)
              ? rawData.tags.slice(0, 32)
              : rawData.passthrough
                ? [rawData.passthrough]
                : undefined,
            page_route: rawData.passthrough ?? '/',
          }

          if (validateVideoMetadata(videoMetadata)) {
            videos.push(videoMetadata)
          } else {
            console.warn(
              `[Sitemap Generator] Invalid video metadata in file: ${fullPath}`
            )
          }
        } catch (parseError) {
          console.error(
            `[Sitemap Generator] Error parsing video metadata file ${fullPath}:`,
            parseError
          )
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath} for videos:`, error)
  }

  return videos
}

// ============================================================================
// MAIN DISCOVERY FUNCTION
// ============================================================================

/**
 * Recursively discover all page.tsx files in the app directory
 * Returns an array of PageEntry objects ready for sitemap generation
 */
async function discoverPagesRecursive(
  dirPath: string,
  basePath = ''
): Promise<PageEntry[]> {
  const pages: PageEntry[] = []

  try {
    const entries = await readdir(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name)

      if (entry.isDirectory()) {
        if (shouldExcludeFolder(entry.name)) {
          continue
        }

        const subPath = basePath ? `${basePath}/${entry.name}` : entry.name
        const subPages = await discoverPagesRecursive(fullPath, subPath)
        pages.push(...subPages)
      } else if (entry.isFile() && entry.name === 'page.tsx') {
        const fileStats = await stat(fullPath)
        const route = basePath === '' ? '/' : `/${basePath}`
        const shouldExclude = isPageNoIndex(route)

        if (!shouldExclude) {
          pages.push({
            path: route,
            lastModified: fileStats.mtime,
            changeFrequency: DEFAULT_CHANGE_FREQUENCY,
            priority: getPriority(route),
          })
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error)
  }

  return pages
}

/**
 * Main function to discover all pages, images, and videos, returning sorted sitemap entries
 */
export async function discoverPages(): Promise<PageEntry[]> {
  const appDir = join(process.cwd(), 'app')
  const publicDir = join(process.cwd(), 'public')
  const videosDir = join(process.cwd(), 'videos')

  try {
    const [pages, images, videos] = await Promise.all([
      discoverPagesRecursive(appDir),
      discoverImagesRecursive(publicDir),
      discoverVideosRecursive(videosDir),
    ])

    const videosByPage = new Map<
      string,
      NonNullable<MetadataRoute.Sitemap[number]['videos']>
    >()

    for (const video of videos) {
      const pageRoute = video.page_route ?? '/'
      const existingVideos = videosByPage.get(pageRoute) ?? []
      const transformedVideo = transformToSitemapVideo(video)
      videosByPage.set(pageRoute, [...existingVideos, transformedVideo])
    }

    const pagesWithMedia = pages.map((page) => {
      const pageVideos = videosByPage.get(page.path)
      const pageImages =
        page.path === '/' && images.length > 0 ? images : undefined

      return {
        ...page,
        images: pageImages,
        videos: pageVideos,
      }
    })

    const sorted = pagesWithMedia.sort((a, b) => {
      if (a.path === '/') return -1
      if (b.path === '/') return 1
      return a.path.localeCompare(b.path)
    })

    console.log(
      '[Sitemap Generator] Discovered indexable pages:',
      sorted.map((p) => p.path)
    )
    console.log(
      '\n Note: If page is not found in the list above, it has noIndex set to true in its metadata, or metadata is not defined. \n'
    )
    console.log(`[Sitemap Generator] Discovered ${images.length} images`)
    console.log(`[Sitemap Generator] Discovered ${videos.length} videos`)

    for (const [route, vids] of videosByPage.entries()) {
      console.log(
        `[Sitemap Generator] Page ${route} has ${vids.length} video(s)`
      )
    }

    return sorted
  } catch (error) {
    console.error('Error discovering pages:', error)
    return []
  }
}
