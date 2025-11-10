import { useCallback } from 'react'
import { cn } from '@/lib/utils'
import type { ChipListProps } from '@/types/ChipList.types'
import { Chip } from './Chip'

export function ChipList<T = string>({
  selectedOptions,
  size = 'default',
  disabled = false,
  onRemove,
  renderChip,
  className,
  'aria-label': ariaLabel,
}: ChipListProps<T>) {
  const handleRemove = useCallback(
    (value: T) => {
      if (!disabled) {
        onRemove(value)
      }
    },
    [disabled, onRemove]
  )

  if (selectedOptions.length === 0) {
    return null
  }

  return (
    <ul
      className={cn(
        'flex flex-wrap gap-2 p-2 border border-border rounded-md bg-background',
        'min-h-10',
        className
      )}
      aria-label={ariaLabel ?? 'Selected items'}
    >
      {selectedOptions.map((option) => (
        <Chip
          key={
            typeof option.value === 'string'
              ? option.value
              : JSON.stringify(option.value)
          }
          value={option.value}
          label={option.label}
          size={size}
          disabled={disabled}
          onRemove={handleRemove}
          renderChip={renderChip}
        />
      ))}
    </ul>
  )
}
