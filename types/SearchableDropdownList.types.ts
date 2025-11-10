import type { ReactNode } from 'react'
import type { DropdownOption, DropdownSize } from './SearchableDropdown.types'

interface SearchableDropdownListProps<T = string> {
  listboxRef: React.RefObject<HTMLDivElement | null>
  listboxId: string
  labelId?: string
  filteredOptions: readonly DropdownOption<T>[]
  highlightedIndex: number
  currentValue: T | null
  dropdownId: string
  emptyMessage: string
  maxHeight: string
  size: DropdownSize
  renderOption?: (option: DropdownOption<T>) => ReactNode
  onSelect: (option: DropdownOption<T>) => void
  onMouseEnter: (index: number) => void
}

export type { SearchableDropdownListProps }
