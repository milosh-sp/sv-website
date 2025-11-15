import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SearchableDropdownSearchProps } from '@/types/SearchableDropdownSearch.types'
import { Input } from '@/components/atoms/Input'

const SIZE_STYLES = {
  sm: {
    icon: 'h-4 w-4',
  },
  default: {
    icon: 'h-4 w-4',
  },
  lg: {
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
            'absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none'
          )}
          aria-hidden='true'
        />
        <Input
          ref={searchInputRef}
          id={searchInputId}
          type='text'
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={searchPlaceholder}
          aria-label='Search options'
          aria-controls={listboxId}
          className='pl-9'
        />
      </div>
    </div>
  )
}
