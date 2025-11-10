import type { ReactNode } from 'react'
import type { ChipRenderProps } from './Chip.types'
import type { DropdownOption, DropdownSize } from './SearchableDropdown.types'

interface ChipListProps<T = string> {
  selectedOptions: readonly DropdownOption<T>[]
  size?: DropdownSize
  disabled?: boolean
  onRemove: (value: T) => void
  renderChip?: (props: ChipRenderProps<T>) => ReactNode
  className?: string
  'aria-label'?: string
}

export type { ChipListProps }
