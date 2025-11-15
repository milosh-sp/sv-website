import type { ComponentProps } from 'react'

type TextVariant = 'body' | 'body-large' | 'caption' | 'muted'

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

interface TextProps extends ComponentProps<'p'> {
  variant?: TextVariant
  size?: TextSize
  className?: string
  children: React.ReactNode
  pretty?: boolean
}

export type { TextProps, TextVariant, TextSize }
