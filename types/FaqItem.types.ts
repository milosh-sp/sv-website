import type { ComponentProps } from 'react'
import type { FaqItem } from './FaqSection.types'

/**
 * Props for the FAQ Item component
 * Focuses on FAQ-specific data and state management
 * Delegates accordion behavior to the generic Accordion component
 */
interface FaqItemProps extends Omit<ComponentProps<'div'>, 'onToggle'> {
  /**
   * The FAQ data object containing question and answer
   */
  faq: FaqItem

  /**
   * The index of this FAQ item in the list
   */
  index: number

  /**
   * Whether this FAQ item is currently expanded
   */
  isOpen: boolean

  /**
   * Callback to toggle the expanded state of this FAQ item
   * Receives the index of the item being toggled
   */
  onToggle: (index: number) => void

  /**
   * Prefix for generating unique IDs for this FAQ item
   * Used to create buttonId and panelId for accessibility
   */
  idPrefix: string
}

export type { FaqItemProps }
