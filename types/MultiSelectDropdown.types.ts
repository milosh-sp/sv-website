import type { ReactNode } from 'react'
import type { SearchableDropdownProps } from './SearchableDropdown.types'
import type { ChipRenderProps } from './Chip.types'

interface MultiSelectDropdownBaseProps<T = string>
  extends Omit<
    SearchableDropdownProps<T>,
    'value' | 'onChange' | 'defaultValue'
  > {
  maxSelections?: number
  renderChip?: (props: ChipRenderProps<T>) => ReactNode
  chipContainerClassName?: string
  noOptionsMessage?: string
}

interface ControlledMultiSelectProps<T = string>
  extends MultiSelectDropdownBaseProps<T> {
  value: readonly T[]
  onChange: (values: readonly T[]) => void
  defaultValue?: never
}

interface UncontrolledMultiSelectProps<T = string>
  extends MultiSelectDropdownBaseProps<T> {
  defaultValue?: readonly T[]
  onChange?: (values: readonly T[]) => void
  value?: never
}

type MultiSelectDropdownProps<T = string> =
  | ControlledMultiSelectProps<T>
  | UncontrolledMultiSelectProps<T>

export type {
  MultiSelectDropdownProps,
  ControlledMultiSelectProps,
  UncontrolledMultiSelectProps,
}
