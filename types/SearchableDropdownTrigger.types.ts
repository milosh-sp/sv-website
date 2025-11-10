import type { DropdownOption, DropdownSize } from './SearchableDropdown.types'

interface SearchableDropdownTriggerProps<T = string> {
  triggerRef: React.RefObject<HTMLButtonElement | null>
  dropdownId: string
  isOpen: boolean
  disabled: boolean
  loading: boolean
  selectedOption: DropdownOption<T> | null
  placeholder: string
  clearable: boolean
  size: DropdownSize
  error?: string
  required: boolean
  labelId?: string
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaInvalid: boolean
  listboxId: string
  onToggle: () => void
  onKeyDown: (e: React.KeyboardEvent) => void
  onClear: (e: React.MouseEvent) => void
  className?: string
}

export type { SearchableDropdownTriggerProps }
