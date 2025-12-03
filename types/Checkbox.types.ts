import type { ComponentProps } from 'react'

type CheckboxSize = 'sm' | 'default' | 'lg'

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'size' | 'type'> {
  size?: CheckboxSize
  label?: string
  description?: string
  error?: string
  indeterminate?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
}

export type { CheckboxProps }
