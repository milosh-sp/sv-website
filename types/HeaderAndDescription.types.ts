import type { ComponentProps } from 'react'

export interface HeaderAndDescriptionProps extends ComponentProps<'header'> {
  heading: string
  headingHighlight?: string
  description?: string
  className?: string
  headingClassName?: string
  descriptionClassName?: string
  highlightClassName?: string
}
