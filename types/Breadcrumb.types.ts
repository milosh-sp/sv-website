// Define types for Breadcrumb component here

interface BreadcrumbItem {
  name: string
  url: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export type { BreadcrumbItem, BreadcrumbProps }
