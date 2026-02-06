import type { ComponentProps } from 'react'

type BlockQuoteProps = ComponentProps<'blockquote'> & {
  children: React.ReactNode
  className?: string
  colorScheme?: 'destructive' | 'success' | 'primary' | 'warning'
}

export type { BlockQuoteProps }
