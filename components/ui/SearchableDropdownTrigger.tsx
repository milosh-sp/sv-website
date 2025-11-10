import { ChevronDown, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchableDropdownTriggerProps } from '@/types/SearchableDropdownTrigger.types'

const SIZE_STYLES = {
  sm: {
    trigger: 'h-8 text-sm px-3',
    icon: 'h-4 w-4',
  },
  default: {
    trigger: 'h-9 text-base px-3 md:text-sm',
    icon: 'h-4 w-4',
  },
  lg: {
    trigger: 'h-10 text-base px-4',
    icon: 'h-5 w-5',
  },
} as const

function SearchableDropdownTriggerImpl<T = string>({
  triggerRef,
  dropdownId,
  isOpen,
  disabled,
  loading,
  selectedOption,
  placeholder,
  clearable,
  size,
  required,
  labelId,
  ariaLabel,
  ariaDescribedBy,
  ariaInvalid,
  listboxId,
  onToggle,
  onKeyDown,
  onClear,
  className,
}: SearchableDropdownTriggerProps<T>) {
  const sizeStyles = SIZE_STYLES[size]

  return (
    <button
      ref={triggerRef}
      id={dropdownId}
      type='button'
      onClick={onToggle}
      onKeyDown={onKeyDown}
      disabled={disabled || loading}
      aria-haspopup='listbox'
      aria-expanded={isOpen}
      aria-labelledby={labelId}
      aria-label={ariaLabel ?? (labelId ? undefined : 'Select option')}
      aria-describedby={ariaDescribedBy}
      aria-invalid={ariaInvalid}
      aria-controls={isOpen ? listboxId : undefined}
      data-required={required}
      className={cn(
        'flex w-full items-center justify-between rounded-md border bg-background shadow-sm transition-[color,box-shadow] outline-none',
        'border-input hover:border-ring',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        'disabled:cursor-not-allowed disabled:opacity-50',
        sizeStyles.trigger,
        className
      )}
    >
      <span
        className={cn(
          'truncate text-left',
          !selectedOption && 'text-muted-foreground'
        )}
      >
        {loading ? 'Loading...' : (selectedOption?.label ?? placeholder)}
      </span>

      <div className='flex items-center gap-1 ml-2'>
        {loading && <Loader2 className={cn(sizeStyles.icon, 'animate-spin')} />}
        {clearable && selectedOption && !loading && !disabled && (
          <button
            type='button'
            onClick={onClear}
            className='hover:bg-accent rounded p-0.5 transition-colors'
            aria-label='Clear selection'
            tabIndex={-1}
          >
            <X className={sizeStyles.icon} />
          </button>
        )}
        <ChevronDown
          className={cn(
            sizeStyles.icon,
            'transition-transform',
            isOpen && 'rotate-180'
          )}
          aria-hidden='true'
        />
      </div>
    </button>
  )
}

export const SearchableDropdownTrigger = SearchableDropdownTriggerImpl as <
  T = string,
>(
  props: SearchableDropdownTriggerProps<T>
) => React.JSX.Element
