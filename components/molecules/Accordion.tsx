import { cn } from '@/lib/utils'
import type { AccordionProps } from '@/types/Accordion.types'
import { AccordionButton } from '@/components/atoms/AccordionButton'
import { AccordionContent } from '@/components/atoms/AccordionContent'

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
      <AccordionButton
        buttonId={buttonId}
        panelId={panelId}
        isOpen={isOpen}
        onToggle={onToggle}
        trigger={trigger}
        icon={icon}
        showIcon={showIcon}
        triggerClassName={triggerClassName}
        onKeyDown={handleKeyDown}
      />
      <AccordionContent panelId={panelId} isOpen={isOpen}>
        {children}
      </AccordionContent>
    </div>
  )
}
