import { useState } from 'react'
import type { DropdownOption } from '@/types/SearchableDropdown.types'
import type {
  UseMultiSelectProps,
  UseMultiSelectReturn,
} from '@/types/UseMultiSelect.types'

export function useMultiSelect<T = string>({
  options,
  value: controlledValue,
  defaultValue = [],
  onChange,
  maxSelections,
  disabled = false,
}: UseMultiSelectProps<T>): UseMultiSelectReturn<T> {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState<readonly T[]>(defaultValue)
  const selectedValues = isControlled ? controlledValue : internalValue

  const selectedOptions = selectedValues
    .map((value) => options.find((opt) => opt.value === value))
    .filter((opt): opt is DropdownOption<T> => opt !== undefined)

  const availableOptions = options.filter(
    (option) => !selectedValues.includes(option.value) && !option.disabled
  )

  const isSelected = (value: T): boolean => selectedValues.includes(value)

  const canSelect =
    !disabled &&
    (maxSelections === undefined || selectedValues.length < maxSelections)

  const updateValue = (newValues: readonly T[]) => {
    if (!isControlled) {
      setInternalValue(newValues)
    }
    onChange?.(newValues)
  }

  const handleAdd = (value: T) => {
    if (disabled || isSelected(value)) return

    if (maxSelections !== undefined && selectedValues.length >= maxSelections) {
      return
    }

    const newValues = [...selectedValues, value]
    updateValue(newValues)
  }

  const handleRemove = (value: T) => {
    if (disabled) return

    const newValues = selectedValues.filter((v) => v !== value)
    updateValue(newValues)
  }

  const handleClear = () => {
    if (disabled) return
    updateValue([])
  }

  return {
    selectedValues,
    selectedOptions,
    availableOptions,
    isSelected,
    canSelect,
    handleAdd,
    handleRemove,
    handleClear,
  }
}
