import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchableDropdownListProps } from '@/types/SearchableDropdownList.types'
import { SearchableDropdownOption } from './SearchableDropdownOption'

const SIZE_STYLES = {
  sm: {
    option: 'px-3 py-1.5 text-sm',
    icon: 'h-4 w-4',
  },
  default: {
    option: 'px-3 py-2 text-base md:text-sm',
    icon: 'h-4 w-4',
  },
  lg: {
    option: 'px-4 py-2.5 text-base',
    icon: 'h-5 w-5',
  },
} as const

function SearchableDropdownListImpl<T = string>({
  listboxRef,
  listboxId,
  labelId,
  filteredOptions,
  highlightedIndex,
  currentValue,
  dropdownId,
  emptyMessage,
  maxHeight,
  size,
  renderOption,
  onSelect,
  onMouseEnter,
}: SearchableDropdownListProps<T>) {
  const sizeStyles = SIZE_STYLES[size]

  return (
    <div
      ref={listboxRef}
      id={listboxId}
      role='listbox'
      aria-labelledby={labelId}
      aria-activedescendant={
        filteredOptions[highlightedIndex]
          ? `${dropdownId}-option-${highlightedIndex}`
          : undefined
      }
      tabIndex={0}
      style={{ maxHeight }}
      className='overflow-y-auto py-1 outline-none'
    >
      {filteredOptions.length === 0 ? (
        <div
          role='option'
          aria-selected={false}
          tabIndex={-1}
          className={cn(
            'flex items-center gap-2 text-muted-foreground',
            sizeStyles.option
          )}
        >
          <AlertCircle className={sizeStyles.icon} aria-hidden='true' />
          {emptyMessage}
        </div>
      ) : (
        filteredOptions.map((option, index) => {
          const isSelected = option.value === currentValue
          const isHighlighted = index === highlightedIndex

          return (
            <SearchableDropdownOption
              key={
                typeof option.value === 'string'
                  ? option.value
                  : `option-${index}`
              }
              option={option}
              index={index}
              dropdownId={dropdownId}
              isSelected={isSelected}
              isHighlighted={isHighlighted}
              size={size}
              renderOption={renderOption}
              onSelect={onSelect}
              onMouseEnter={onMouseEnter}
            />
          )
        })
      )}
    </div>
  )
}

export const SearchableDropdownList = SearchableDropdownListImpl as <
  T = string,
>(
  props: SearchableDropdownListProps<T>
) => React.JSX.Element
