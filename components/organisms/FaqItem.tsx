import { cn } from '@/lib/utils'
import type { FaqItemProps } from '@/types/FaqItem.types'
import { ChevronDown } from 'lucide-react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

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
          <Heading level={3} variant='subheading' size='sm'>
            {faq.question}
          </Heading>
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
        <Text variant='body' className='text-muted-foreground pt-4'>
          {faq.answer}
        </Text>
      </dd>
    </div>
  )
}
