import type { ComponentProps } from 'react'

interface BreadcrumbItem {
  name: string
  url: string
  current?: boolean
}

interface BreadcrumbProps extends ComponentProps<'nav'> {
  items: BreadcrumbItem[]
  className?: string
  showHome?: boolean
}

export type { BreadcrumbItem, BreadcrumbProps }
