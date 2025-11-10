import type { ReactNode } from 'react'
import type { DropdownSize } from './SearchableDropdown.types'

interface ChipProps<T = string> {
  value: T
  label: string
  size?: DropdownSize
  disabled?: boolean
  onRemove: (value: T) => void
  renderChip?: (props: ChipRenderProps<T>) => ReactNode
  className?: string
  'aria-label'?: string
}

interface ChipRenderProps<T = string> {
  value: T
  label: string
  onRemove: () => void
  disabled?: boolean
}

export type { ChipProps, ChipRenderProps }
