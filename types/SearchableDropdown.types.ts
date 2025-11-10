import type { ReactNode } from 'react'

type DropdownSize = 'sm' | 'default' | 'lg'

interface DropdownOption<T = string> {
  value: T
  label: string
  disabled?: boolean
  description?: string
}

interface SearchableDropdownBaseProps<T = string> {
  options: readonly DropdownOption<T>[]
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  size?: DropdownSize
  disabled?: boolean
  error?: string
  label?: string
  description?: string
  required?: boolean
  loading?: boolean
  clearable?: boolean
  maxHeight?: string
  renderOption?: (option: DropdownOption<T>) => ReactNode
  filterFn?: (option: DropdownOption<T>, searchQuery: string) => boolean
  className?: string
  id?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

interface ControlledDropdownProps<T = string>
  extends SearchableDropdownBaseProps<T> {
  value: T | null
  onChange: (value: T | null) => void
  defaultValue?: never
}

interface UncontrolledDropdownProps<T = string>
  extends SearchableDropdownBaseProps<T> {
  defaultValue?: T | null
  onChange?: (value: T | null) => void
  value?: never
}

type SearchableDropdownProps<T = string> =
  | ControlledDropdownProps<T>
  | UncontrolledDropdownProps<T>

export type {
  SearchableDropdownProps,
  DropdownOption,
  DropdownSize,
  ControlledDropdownProps,
  UncontrolledDropdownProps,
}
