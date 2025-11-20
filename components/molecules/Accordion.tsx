import { cn } from '@/lib/utils'
import type { AccordionProps } from '@/types/Accordion.types'

/**
 * Generic Accordion component following SOLID principles
 * - Single Responsibility: Handles only accordion expand/collapse logic
 * - Open/Closed: Extensible through props, closed for modification
 * - Liskov Substitution: Predictable behavior as a reusable component
 * - Interface Segregation: Minimal required props
 * - Dependency Inversion: No internal dependencies on specific content
 *
 * This component is reusable across the codebase for any accordion-like UI
 */
export function Accordion({
  isOpen,
  onToggle,
  buttonId,
  panelId,
  trigger,
  children,
  className,
  triggerClassName,
  panelClassName,
  icon,
  showIcon = true,
  ...props
}: AccordionProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg border overflow-hidden',
        'transition-colors duration-200',
        'hover:border-primary',
        isOpen ? 'border-primary' : 'border-border',
        'shadow-sm hover:shadow-md',
        className
      )}
      {...props}
    >
      <dt>
        <button
          id={buttonId}
          type='button'
          onClick={onToggle}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full px-6 py-4 text-left',
            'flex items-center justify-between',
            'transition-colors duration-200',
            'hover:bg-accent/50',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-primary focus-visible:ring-offset-2',
            'cursor-pointer',
            triggerClassName
          )}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          {trigger}
          {showIcon && icon}
        </button>
      </dt>
      <dd
        id={panelId}
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          'border-t border-border',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          panelClassName
        )}
      >
        <div className={cn('overflow-hidden')}>{children}</div>
      </dd>
    </div>
  )
}
