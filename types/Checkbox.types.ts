import type { ComponentProps } from 'react'

type CheckboxSize = 'sm' | 'default' | 'lg'

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  /**
   * Size variant of the checkbox
   * @default 'default'
   */
  size?: CheckboxSize

  /**
   * Label text for the checkbox
   */
  label?: string

  /**
   * Description text displayed below the label
   */
  description?: string

  /**
   * Error message to display
   */
  error?: string

  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   */
  indeterminate?: boolean

  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string

  /**
   * ARIA described by for accessibility
   */
  'aria-describedby'?: string

  /**
   * ARIA invalid state for accessibility
   */
  'aria-invalid'?: boolean

  /**
   * ARIA required state for accessibility
   */
  'aria-required'?: boolean
}

export type { CheckboxProps, CheckboxSize }
