import type { ComponentProps } from 'react'
import type { HeadingLevel } from './Heading.types'

type CVHeaderVariant = 'default' | 'compact'

interface CVHeaderProps extends ComponentProps<'header'> {
  variant?: CVHeaderVariant
  headingLevel?: HeadingLevel
}

export type { CVHeaderProps, CVHeaderVariant }
