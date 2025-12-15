import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
import type { MetadataRoute } from 'next'
import { siteConfig } from './seo-config'

// ============================================================================
// TYPES
// ============================================================================

export interface PageEntry {
  path: string
  lastModified: Date
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
  images?: string[]
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
  routeGroups: /^\(.*\)$/, // Route groups: (auth), (dashboard), etc.
  privateFolder: /^_/, // Private folders: _components, _utils, etc.
  dynamicSegments: /^\[.*\]$/, // Dynamic segments: [id], [slug], etc.
}

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
 * Get priority based on route depth and type
 * Home page gets highest priority, deeper routes get lower priority
 */
function getPriority(route: string): number {
  if (route === '/') {
    return HOME_PRIORITY
  }

  // Reduce priority based on depth
  const depth = route.split('/').filter((segment) => segment).length
  return Math.max(0.5, DEFAULT_PRIORITY - depth * 0.1)
}

/**
 * Check if a page has noIndex set to true in its metadata
 * Returns true if the page should be excluded from sitemap
 */
function isPageNoIndex(route: string): boolean {
  // Import pageSeoConfig dynamically to check noIndex status
  const { pageSeoConfig } = require('./seo-config')

  const pageConfig = pageSeoConfig?.[route]

  if (!pageConfig) {
    console.warn(`[Sitemap Generator] No SEO config found for route: ${route}`)
    return false
  }

  return pageConfig?.noIndex === true
}

// ============================================================================
// IMAGE DISCOVERY FUNCTION
// ============================================================================

/**
 * Recursively discover all image files in the public directory
 * Returns an array of absolute image URLs
 */
async function discoverImagesRecursive(
  dirPath: string,
  basePath: string = ''
): Promise<string[]> {
  const images: string[] = []

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
// MAIN DISCOVERY FUNCTION
// ============================================================================

/**
 * Recursively discover all page.tsx files in the app directory
 * Returns an array of PageEntry objects ready for sitemap generation
 */
async function discoverPagesRecursive(
  dirPath: string,
  basePath: string = ''
): Promise<PageEntry[]> {
  const pages: PageEntry[] = []

  try {
    const entries = await readdir(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name)

      if (entry.isDirectory()) {
        // Skip excluded folders
        if (shouldExcludeFolder(entry.name)) {
          continue
        }

        // Build the path for subdirectories
        const subPath = basePath ? `${basePath}/${entry.name}` : entry.name

        // Recursively scan subdirectories
        const subPages = await discoverPagesRecursive(fullPath, subPath)
        pages.push(...subPages)
      } else if (entry.isFile() && entry.name === 'page.tsx') {
        // Found a page file
        const fileStats = await stat(fullPath)

        // Convert relative path to route (e.g., "candidate" -> "/candidate", "" -> "/")
        const route = basePath === '' ? '/' : `/${basePath}`

        // Check if page has noIndex set to true
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
 * Main function to discover all pages and images, returning sorted sitemap entries
 */
export async function discoverPages(): Promise<PageEntry[]> {
  const appDir = join(process.cwd(), 'app')
  const publicDir = join(process.cwd(), 'public')

  try {
    const [pages, images] = await Promise.all([
      discoverPagesRecursive(appDir),
      discoverImagesRecursive(publicDir),
    ])

    // Add images to the home page entry (or distribute as needed)
    const pagesWithImages = pages.map((page) => {
      if (page.path === '/' && images.length > 0) {
        return {
          ...page,
          images,
        }
      }
      return page
    })

    // Sort pages: home first, then by path
    const sorted = pagesWithImages.sort((a, b) => {
      if (a.path === '/') return -1
      if (b.path === '/') return 1
      return a.path.localeCompare(b.path)
    })

    // Debug logging
    console.log(
      '[Sitemap Generator] Discovered indexable pages:',
      sorted.map((p) => p.path)
    )
    console.log(
      '\n Note: If page is not found in the list above, it has noIndex set to true in its metadata, or metadata is not defined. \n'
    )
    console.log(`[Sitemap Generator] Discovered ${images.length} images`)

    return sorted
  } catch (error) {
    console.error('Error discovering pages:', error)
    return []
  }
}
