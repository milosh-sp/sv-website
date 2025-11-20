import type { ComponentProps } from 'react'

interface DecorativeTextProps extends ComponentProps<'span'> {
  text: string
  className?: string
}

export type { DecorativeTextProps }
