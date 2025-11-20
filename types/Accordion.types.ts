import type { ComponentProps, ReactNode } from 'react'

/**
 * Generic accordion component props for reusable expand/collapse functionality
 * Follows Open/Closed Principle - open for extension, closed for modification
 */
interface AccordionProps extends Omit<ComponentProps<'div'>, 'onToggle'> {
  /**
   * Whether the accordion is currently expanded
   */
  isOpen: boolean

  /**
   * Callback fired when accordion toggle button is clicked
   */
  onToggle: () => void

  /**
   * Unique identifier for the accordion button element
   */
  buttonId: string

  /**
   * Unique identifier for the accordion panel element
   */
  panelId: string

  /**
   * Content to display in the accordion header/trigger
   */
  trigger: ReactNode

  /**
   * Content to display in the accordion panel (expanded content)
   */
  children: ReactNode

  /**
   * Optional CSS class name for additional styling
   */
  className?: string

  /**
   * Optional CSS class name for the trigger button
   */
  triggerClassName?: string

  /**
   * Optional CSS class name for the panel content
   */
  panelClassName?: string

  /**
   * Optional icon component to display in the trigger
   * Typically a chevron or similar indicator
   */
  icon?: ReactNode

  /**
   * Whether to show the icon (useful for conditional rendering)
   * @default true
   */
  showIcon?: boolean
}

export type { AccordionProps }
