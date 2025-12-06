import type { HTMLAttributes } from 'react'

interface CheckboxOption {
  value: string
  label: string
}

interface CheckboxGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string
  options: readonly CheckboxOption[]
  values: string[]
  onChange: (values: string[]) => void
  error?: string
  disabled?: boolean
  label?: string
  description?: string
}

export type { CheckboxGroupProps }
