import type { ComponentProps, ForwardedRef } from 'react'

type ToggleInputSize = 'sm' | 'default' | 'lg'

type ToggleInputVariant = 'checkbox' | 'radio'

interface BaseToggleInputProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  size?: ToggleInputSize
  variant: ToggleInputVariant
  label?: string
  description?: string
  error?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
  inputRef?: ForwardedRef<HTMLInputElement>
  defaultAriaLabel: string
}

export type { BaseToggleInputProps, ToggleInputSize, ToggleInputVariant }
