import { cn } from '@/lib/utils'
import type { AccordionButtonProps } from '@/types/AccordionButtonProps.types'

export function AccordionButton({
  buttonId,
  panelId,
  isOpen,
  onToggle,
  trigger,
  icon,
  showIcon = true,
  triggerClassName,
  onKeyDown,
  className,
  ...props
}: AccordionButtonProps) {
  return (
    <dt>
      <button
        id={buttonId}
        type='button'
        onClick={onToggle}
        onKeyDown={onKeyDown}
        className={cn(
          'w-full px-6 py-4 text-left',
          'flex items-center justify-between',
          'transition-colors duration-200',
          'hover:bg-accent/50',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-primary focus-visible:ring-offset-2',
          'cursor-pointer',
          triggerClassName,
          className
        )}
        aria-expanded={isOpen}
        aria-controls={panelId}
        {...props}
      >
        {trigger}
        {showIcon && icon}
      </button>
    </dt>
  )
}
