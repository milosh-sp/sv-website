import type { ReactNode } from 'react'
import type { DropdownOption, DropdownSize } from './SearchableDropdown.types'

interface SearchableDropdownOptionProps<T = string> {
  option: DropdownOption<T>
  index: number
  dropdownId: string
  isSelected: boolean
  isHighlighted: boolean
  size: DropdownSize
  renderOption?: (option: DropdownOption<T>) => ReactNode
  onSelect: (option: DropdownOption<T>) => void
  onMouseEnter: (index: number) => void
}

export type { SearchableDropdownOptionProps }
