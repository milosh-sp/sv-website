import type { DropdownOption } from './SearchableDropdown.types'

interface UseMultiSelectProps<T = string> {
  options: readonly DropdownOption<T>[]
  value?: readonly T[]
  defaultValue?: readonly T[]
  onChange?: (values: readonly T[]) => void
  maxSelections?: number
  disabled?: boolean
}

interface UseMultiSelectReturn<T = string> {
  selectedValues: readonly T[]
  selectedOptions: readonly DropdownOption<T>[]
  availableOptions: readonly DropdownOption<T>[]
  isSelected: (value: T) => boolean
  canSelect: boolean
  handleAdd: (value: T) => void
  handleRemove: (value: T) => void
  handleClear: () => void
}

export type { UseMultiSelectProps, UseMultiSelectReturn }
