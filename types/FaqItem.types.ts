import type { ComponentProps } from 'react'
import type { FaqItem } from './FaqSection.types'

interface FaqItemProps extends Omit<ComponentProps<'div'>, 'onToggle'> {
  faq: FaqItem
  index: number
  isOpen: boolean
  onToggle: (index: number) => void
  idPrefix: string
}

export type { FaqItemProps }
