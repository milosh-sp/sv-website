import type { BreadcrumbItem } from '@/types/Breadcrumb.types'

// Hook to generate breadcrumbs from pathname
export function useBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)

  return segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join('/')}`
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return {
      name,
      url,
      current: index === segments.length - 1,
    }
  })
}
