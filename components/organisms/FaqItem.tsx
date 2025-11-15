import { cn } from '@/lib/utils'
import type { FaqItemProps } from '@/types/FaqItem.types'
import { ChevronDown } from 'lucide-react'

export const FaqItem = ({
  faq,
  index,
  isOpen,
  onToggle,
  idPrefix,
  ...props
}: FaqItemProps) => {
  const buttonId = `faq-button-${idPrefix}-${index}`
  const panelId = `faq-panel-${idPrefix}-${index}`

  return (
    <div
      className={cn(
        'bg-white rounded-lg border overflow-hidden transition-colors hover:border-blue-500',
        isOpen ? 'border-blue-500' : 'border-gray-450'
      )}
      {...props}
    >
      <dt>
        <button
          id={buttonId}
          type='button'
          onClick={() => onToggle(index)}
          className='w-full px-6 py-4 text-left flex items-center justify-between hover:border-blue-500 transition-colors cursor-pointer'
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className='font-semibold text-foreground'>{faq.question}</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 text-primary transition-transform',
              isOpen && 'rotate-180'
            )}
            aria-hidden='true'
          />
        </button>
      </dt>
      <dd
        id={panelId}
        className={cn(
          'px-6 pb-4 border-t border-border',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <p className='text-muted-foreground pt-4'>{faq.answer}</p>
      </dd>
    </div>
  )
}
