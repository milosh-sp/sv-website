import { cn } from '@/lib/utils'
import type { AccordionContentProps } from '@/types/AccordionContent.types'

export function AccordionContent({
  panelId,
  isOpen,
  children,
  panelClassName,
  className,
  ...props
}: AccordionContentProps) {
  return (
    <dd
      id={panelId}
      className={cn(
        'grid transition-all duration-300 ease-in-out',
        'border-t border-border',
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        panelClassName,
        className
      )}
      {...props}
    >
      <div className={cn('overflow-hidden')}>{children}</div>
    </dd>
  )
}
