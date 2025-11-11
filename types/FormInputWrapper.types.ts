import type { ReactNode } from 'react'

type FormInputSize = 'sm' | 'default' | 'lg'

interface FormInputWrapperProps {
  children: ReactNode
  size?: FormInputSize
  label?: string
  description?: string
  error?: string
  required?: boolean
  inputId: string
  descriptionId?: string
  errorId?: string
}

export type { FormInputWrapperProps, FormInputSize }
