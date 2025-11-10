'use client'

import { useMultiSelect } from '@/hooks/useMultiSelect'
import type { MultiSelectDropdownProps } from '@/types/MultiSelectDropdown.types'
import { ChipList } from './ChipList'
import { SearchableDropdown } from './SearchableDropdown'

export function MultiSelectDropdown<T = string>({
  options,
  value,
  defaultValue,
  onChange,
  maxSelections,
  disabled = false,
  renderChip,
  chipContainerClassName,
  ...dropdownProps
}: MultiSelectDropdownProps<T>) {
  const {
    selectedOptions,
    availableOptions,
    canSelect,
    handleAdd,
    handleRemove,
  } = useMultiSelect({
    options,
    value,
    defaultValue,
    onChange,
    maxSelections,
    disabled,
  })

  const handleSelect = (selectedValue: T | null) => {
    if (selectedValue !== null && canSelect) {
      handleAdd(selectedValue)
    }
  }

  return (
    <div className='space-y-2'>
      {/* Selected items chips */}
      {selectedOptions.length > 0 && (
        <ChipList
          selectedOptions={selectedOptions}
          size={dropdownProps.size}
          disabled={disabled}
          onRemove={handleRemove}
          renderChip={renderChip}
          className={chipContainerClassName}
        />
      )}

      {/* Reuse existing SearchableDropdown */}
      <SearchableDropdown
        {...dropdownProps}
        options={availableOptions}
        value={null}
        onChange={handleSelect}
        disabled={disabled || (!canSelect && availableOptions.length === 0)}
      />
    </div>
  )
}
