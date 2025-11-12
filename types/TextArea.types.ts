import type { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-required'?: boolean
}

export type { TextAreaProps }

