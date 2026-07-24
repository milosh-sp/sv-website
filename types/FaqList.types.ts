import type { ComponentProps } from 'react'
import type { FaqItem } from './FaqSection.types'

interface FaqListProps extends Omit<ComponentProps<'article'>, 'onToggle'> {
  faqs: readonly FaqItem[]
  heading: string
  headingId: string
  openItems: number[]
  idPrefix: string
  onToggle: (index: number) => void
  indexOffset?: number
  iconClassName?: string
}

export type { FaqListProps }
