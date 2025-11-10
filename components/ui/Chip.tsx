import { X } from 'lucide-react'
import { useCallback } from 'react'
import { cn } from '@/lib/utils'
import type { ChipProps } from '@/types/Chip.types'

const SIZE_STYLES = {
  sm: {
    chip: 'h-6 px-2 text-xs gap-1',
    icon: 'h-3 w-3',
  },
  default: {
    chip: 'h-7 px-2.5 text-sm gap-1.5',
    icon: 'h-3.5 w-3.5',
  },
  lg: {
    chip: 'h-8 px-3 text-base gap-2',
    icon: 'h-4 w-4',
  },
} as const

export function Chip<T = string>({
  value,
  label,
  size = 'default',
  disabled = false,
  onRemove,
  renderChip,
  className,
  'aria-label': ariaLabel,
}: ChipProps<T>) {
  const sizeStyles = SIZE_STYLES[size]

  const handleRemove = useCallback(() => {
    if (!disabled) {
      onRemove(value)
    }
  }, [disabled, onRemove, value])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleRemove()
      }
    },
    [handleRemove]
  )

  // Allow custom chip rendering via render prop
  if (renderChip) {
    return <>{renderChip({ value, label, onRemove: handleRemove, disabled })}</>
  }

  return (
    <li
      className={cn(
        'inline-flex items-center rounded-md bg-primary/10 text-primary font-medium transition-colors',
        'border border-primary/20',
        disabled && 'opacity-50 cursor-not-allowed',
        sizeStyles.chip,
        className
      )}
      aria-label={ariaLabel ?? `${label} chip`}
    >
      <span className='truncate max-w-[200px]'>{label}</span>
      <button
        type='button'
        onClick={handleRemove}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-colors',
          'hover:bg-primary/20 focus:outline-none focus:ring-1 focus:ring-primary',
          'disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer',
          'p-0.5'
        )}
        aria-label={`Remove ${label}`}
        tabIndex={disabled ? -1 : 0}
      >
        <X className={sizeStyles.icon} aria-hidden='true' />
      </button>
    </li>
  )
}
