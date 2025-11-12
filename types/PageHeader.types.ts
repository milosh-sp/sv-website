import type { ComponentProps } from 'react'

interface PageHeaderProps extends ComponentProps<'header'> {
  /** Main heading text */
  title: string
  /** Subheading/description text */
  description: string
}

export type { PageHeaderProps }
