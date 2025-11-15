import type { ComponentProps } from 'react'

type CVHeaderVariant = 'default' | 'compact'

interface CVHeaderProps extends ComponentProps<'header'> {
  variant?: CVHeaderVariant
}

export type { CVHeaderProps, CVHeaderVariant }
