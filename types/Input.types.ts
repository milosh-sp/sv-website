import { ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
}

export type { InputProps }
