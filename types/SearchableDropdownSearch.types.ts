import type { DropdownSize } from './SearchableDropdown.types'

interface SearchableDropdownSearchProps {
  searchInputRef: React.RefObject<HTMLInputElement | null>
  searchInputId: string
  searchQuery: string
  searchPlaceholder: string
  listboxId: string
  size: DropdownSize
  onSearchChange: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent) => void
}

export type { SearchableDropdownSearchProps }
