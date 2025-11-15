import type { HTMLAttributes } from 'react'

interface FormFieldConfig {
  id: string
  type: 'radio' | 'checkbox'
  label: string
  description?: string
  readonly options: ReadonlyArray<{ value: string; label: string }>
  readonly value: string
  error?: string
  onChange: (value: string | string[]) => void
  otherFieldId?: string
  otherValue?: string
  onOtherChange?: (value: string) => void
  otherError?: string
}

interface FormFieldsStepProps extends HTMLAttributes<HTMLDivElement> {
  fields: FormFieldConfig[]
  isSubmitting: boolean
}

export type { FormFieldConfig, FormFieldsStepProps }
