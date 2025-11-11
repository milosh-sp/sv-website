import type { HTMLAttributes } from 'react'

interface RadioOption {
  value: string
  label: string
}

interface RadioButtonGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
  label?: string
  description?: string
}

export type { RadioOption, RadioButtonGroupProps }
