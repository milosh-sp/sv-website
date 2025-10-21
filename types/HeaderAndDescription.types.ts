/**
 * Types for HeaderAndDescription component
 */

import type { ComponentProps } from 'react'

export interface SectionHeaderProps extends ComponentProps<'header'> {
  heading: string
  headingHighlight?: string
  description: string
  className?: string
  headingClassName?: string
  descriptionClassName?: string
  highlightClassName?: string
}
