import type { ComponentProps, ReactNode } from 'react'

interface PageLayoutProps extends ComponentProps<'div'> {
  /** Page content to render */
  children: ReactNode
}

export type { PageLayoutProps }
