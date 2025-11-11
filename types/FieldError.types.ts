import type { HTMLAttributes } from 'react'

interface FieldErrorProps extends HTMLAttributes<HTMLParagraphElement> {
  error?: string
  id?: string
}

export type { FieldErrorProps }
