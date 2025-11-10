import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchableDropdownSearchProps } from '@/types/SearchableDropdownSearch.types'

const SIZE_STYLES = {
  sm: {
    input: 'h-8 text-sm px-3',
    icon: 'h-4 w-4',
  },
  default: {
    input: 'h-9 text-base px-3 md:text-sm',
    icon: 'h-4 w-4',
  },
  lg: {
    input: 'h-10 text-base px-4',
    icon: 'h-5 w-5',
  },
} as const

export function SearchableDropdownSearch({
  searchInputRef,
  searchInputId,
  searchQuery,
  searchPlaceholder,
  listboxId,
  size,
  onSearchChange,
  onKeyDown,
}: SearchableDropdownSearchProps) {
  const sizeStyles = SIZE_STYLES[size]

  return (
    <div className='p-2 border-b border-border'>
      <div className='relative'>
        <Search
          className={cn(
            sizeStyles.icon,
            'absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'
          )}
          aria-hidden='true'
        />
        <input
          ref={searchInputRef}
          id={searchInputId}
          type='text'
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={searchPlaceholder}
          aria-label='Search options'
          aria-controls={listboxId}
          className={cn(
            'w-full rounded-md border border-input bg-background pl-9 pr-3 outline-none',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'placeholder:text-muted-foreground',
            sizeStyles.input
          )}
        />
      </div>
    </div>
  )
}
