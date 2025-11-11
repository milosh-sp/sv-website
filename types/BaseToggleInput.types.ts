import type { ComponentProps, ForwardedRef } from 'react'

type ToggleInputSize = 'sm' | 'default' | 'lg'

type ToggleInputVariant = 'checkbox' | 'radio'

interface BaseToggleInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  /**
   * Size variant of the input
   * @default 'default'
   */
  size?: ToggleInputSize

  /**
   * Variant type - determines input type and styling
   */
  variant: ToggleInputVariant

  /**
   * Label text for the input
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

  /**
   * Forwarded ref for the input element
   */
  inputRef?: ForwardedRef<HTMLInputElement>

  /**
   * Default ARIA label to use when no label or aria-label is provided
   */
  defaultAriaLabel: string
}

export type { BaseToggleInputProps, ToggleInputSize, ToggleInputVariant }
