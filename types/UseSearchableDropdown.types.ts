import type { DropdownOption } from './SearchableDropdown.types'

interface UseSearchableDropdownProps<T = string> {
  options: readonly DropdownOption<T>[]
  value?: T | null
  defaultValue?: T | null
  onChange?: (value: T | null) => void
  filterFn?: (option: DropdownOption<T>, searchQuery: string) => boolean
  disabled?: boolean
  loading?: boolean
}

interface UseSearchableDropdownReturn<T = string> {
  isOpen: boolean
  searchQuery: string
  highlightedIndex: number
  currentValue: T | null
  selectedOption: DropdownOption<T> | null
  filteredOptions: readonly DropdownOption<T>[]
  containerRef: React.RefObject<HTMLDivElement>
  triggerRef: React.RefObject<HTMLButtonElement>
  searchInputRef: React.RefObject<HTMLInputElement>
  listboxRef: React.RefObject<HTMLDivElement>
  setIsOpen: (isOpen: boolean) => void
  setSearchQuery: (query: string) => void
  setHighlightedIndex: (index: number) => void
  handleValueChange: (value: T | null) => void
  handleSelect: (option: DropdownOption<T>) => void
  handleClear: (e: React.MouseEvent) => void
  handleToggle: () => void
  handleKeyDown: (e: React.KeyboardEvent) => void
}

export type { UseSearchableDropdownProps, UseSearchableDropdownReturn }
