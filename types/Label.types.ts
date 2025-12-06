import type { ComponentProps } from 'react'

type LabelSize = 'sm' | 'default' | 'lg'

interface LabelProps extends ComponentProps<'label'> {
  inputId: string
  label: string
  required?: boolean
  size?: LabelSize
}

export type { LabelProps }
