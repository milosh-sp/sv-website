import type { LinkProps } from 'next/link'
import type { ReactNode } from 'react'

export interface HeaderLinkProps extends Omit<LinkProps, 'href'> {
  href: string
  children: ReactNode
  variant?: 'desktop' | 'mobile'
  scroll?: boolean
  className?: string
}
