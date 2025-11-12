import { cn } from '@/lib/utils'
import type { SearchableDropdownOptionProps } from '@/types/SearchableDropdownOption.types'

const SIZE_STYLES = {
  sm: {
    option: 'px-3 py-1.5 text-sm',
  },
  default: {
    option: 'px-3 py-2 text-base md:text-sm',
  },
  lg: {
    option: 'px-4 py-2.5 text-base',
  },
} as const

export function SearchableDropdownOption<T = string>({
  option,
  index,
  dropdownId,
  isSelected,
  isHighlighted,
  size,
  renderOption,
  onSelect,
  onMouseEnter,
}: SearchableDropdownOptionProps<T>) {
  const sizeStyles = SIZE_STYLES[size]
  const optionKey =
    typeof option.value === 'string' ? option.value : `option-${index}`

  return (
    <div
      key={optionKey}
      id={`${dropdownId}-option-${index}`}
      role='option'
      aria-selected={isSelected}
      aria-disabled={option.disabled}
      tabIndex={-1}
      onClick={() => !option.disabled && onSelect(option)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          !option.disabled && onSelect(option)
        }
      }}
      onMouseEnter={() => onMouseEnter(index)}
      className={cn(
        'cursor-pointer transition-colors',
        'focus:outline-none',
        isHighlighted && 'bg-accent',
        isSelected && 'bg-primary/10 font-medium',
        option.disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        sizeStyles.option
      )}
    >
      {renderOption ? (
        renderOption(option)
      ) : (
        <div className='flex flex-col'>
          <span>{option.label}</span>
          {option.description && (
            <span className='text-xs text-muted-foreground mt-0.5'>
              {option.description}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
