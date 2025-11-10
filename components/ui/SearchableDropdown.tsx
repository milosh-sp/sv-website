'use client'

import { AlertCircle } from 'lucide-react'
import { useSearchableDropdown } from '@/hooks/useSearchableDropdown'
import { cn } from '@/lib/utils'
import type { SearchableDropdownProps } from '@/types/SearchableDropdown.types'
import { SearchableDropdownList } from './SearchableDropdownList'
import { SearchableDropdownSearch } from './SearchableDropdownSearch'
import { SearchableDropdownTrigger } from './SearchableDropdownTrigger'

function SearchableDropdownImpl<T = string>({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No options found',
  size = 'default',
  disabled = false,
  error,
  label,
  description,
  required = false,
  loading = false,
  clearable = false,
  maxHeight = '16rem',
  renderOption,
  filterFn,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  id,
}: SearchableDropdownProps<T>) {
  const {
    isOpen,
    searchQuery,
    highlightedIndex,
    currentValue,
    selectedOption,
    filteredOptions,
    containerRef,
    triggerRef,
    searchInputRef,
    listboxRef,
    setSearchQuery,
    setHighlightedIndex,
    handleSelect,
    handleClear,
    handleToggle,
    handleKeyDown,
  } = useSearchableDropdown({
    options,
    value,
    defaultValue,
    onChange,
    filterFn,
    disabled,
    loading,
  })

  const dropdownId =
    id ?? `searchable-dropdown-${Math.random().toString(36).substring(2, 9)}`
  const labelId = label ? `${dropdownId}-label` : undefined
  const descriptionId = description ? `${dropdownId}-description` : undefined
  const errorId = error ? `${dropdownId}-error` : undefined
  const listboxId = `${dropdownId}-listbox`
  const searchInputId = `${dropdownId}-search`

  const ids = [ariaDescribedBy, descriptionId, errorId].filter(Boolean)
  const combinedAriaDescribedBy = ids.length > 0 ? ids.join(' ') : undefined

  const isInvalid = ariaInvalid ?? !!error

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {label && (
        <label
          id={labelId}
          htmlFor={dropdownId}
          className={cn(
            'block font-medium text-foreground mb-1.5',
            size === 'sm' && 'text-sm',
            size === 'default' && 'text-base',
            size === 'lg' && 'text-lg',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        >
          {label}
          {required && (
            <span className='text-destructive ml-1' aria-hidden='true'>
              *
            </span>
          )}
        </label>
      )}

      {description && (
        <p
          id={descriptionId}
          className={cn(
            'text-muted-foreground mb-2',
            size === 'sm' && 'text-xs',
            size === 'default' && 'text-sm',
            size === 'lg' && 'text-base',
            disabled && 'opacity-50'
          )}
        >
          {description}
        </p>
      )}

      <SearchableDropdownTrigger
        triggerRef={triggerRef}
        dropdownId={dropdownId}
        isOpen={isOpen}
        disabled={disabled}
        loading={loading}
        selectedOption={selectedOption}
        placeholder={placeholder}
        clearable={clearable}
        size={size}
        required={required}
        labelId={labelId}
        ariaLabel={ariaLabel}
        ariaDescribedBy={combinedAriaDescribedBy}
        ariaInvalid={isInvalid}
        listboxId={listboxId}
        onToggle={handleToggle}
        onKeyDown={handleKeyDown}
        onClear={handleClear}
      />

      {isOpen && (
        <div
          className='absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg'
          role='presentation'
        >
          <SearchableDropdownSearch
            searchInputRef={searchInputRef}
            searchInputId={searchInputId}
            searchQuery={searchQuery}
            searchPlaceholder={searchPlaceholder}
            listboxId={listboxId}
            size={size}
            onSearchChange={setSearchQuery}
            onKeyDown={handleKeyDown}
          />

          <SearchableDropdownList
            listboxRef={listboxRef}
            listboxId={listboxId}
            labelId={labelId}
            filteredOptions={filteredOptions}
            highlightedIndex={highlightedIndex}
            currentValue={currentValue}
            dropdownId={dropdownId}
            emptyMessage={emptyMessage}
            maxHeight={maxHeight}
            size={size}
            renderOption={renderOption}
            onSelect={handleSelect}
            onMouseEnter={setHighlightedIndex}
          />
        </div>
      )}

      {error && (
        <p
          id={errorId}
          className='text-destructive text-sm mt-1.5 flex items-start gap-1.5'
          role='alert'
          aria-live='polite'
        >
          <AlertCircle className='h-4 w-4 mt-0.5 shrink-0' aria-hidden='true' />
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}

export const SearchableDropdown = SearchableDropdownImpl as <T = string>(
  props: SearchableDropdownProps<T>
) => React.JSX.Element
