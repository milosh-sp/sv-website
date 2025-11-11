import type { ComponentProps } from 'react'

type RadioButtonSize = 'sm' | 'default' | 'lg'

interface RadioButtonProps
  extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  size?: RadioButtonSize
  label?: string
  description?: string
  error?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
}

export type { RadioButtonProps, RadioButtonSize }
