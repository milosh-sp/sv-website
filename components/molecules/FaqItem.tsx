import { cn } from '@/lib/utils'
import type { FaqItemProps } from '@/types/FaqItem.types'
import { ChevronDown } from 'lucide-react'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Accordion } from '@/components/molecules/Accordion'

/**
 * FAQ Item component following SOLID principles
 * - Single Responsibility: Handles only FAQ-specific content rendering
 * - Uses generic Accordion component for expand/collapse behavior
 * - Focuses on FAQ data structure and presentation
 */
export function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  idPrefix,
  iconClassName = 'text-companies',
  ...props
}: FaqItemProps) {
  const buttonId = `faq-button-${idPrefix}-${index}`
  const panelId = `faq-panel-${idPrefix}-${index}`

  const handleToggle = () => {
    onToggle(index)
  }

  const trigger = (
    <Heading level={3} variant='subheading' size='sm'>
      {faq.question}
    </Heading>
  )

  const icon = (
    <ChevronDown
      className={cn(
        'h-5 w-5 shrink-0 ml-4',
        iconClassName,
        'transition-transform duration-300 ease-in-out',
        isOpen && 'rotate-180'
      )}
      aria-hidden='true'
    />
  )

  return (
    <Accordion
      isOpen={isOpen}
      onToggle={handleToggle}
      buttonId={buttonId}
      panelId={panelId}
      trigger={trigger}
      icon={icon}
      {...props}
    >
      <Text variant='body' className='text-muted-foreground px-6 pt-4 pb-4'>
        {faq.answer}
      </Text>
    </Accordion>
  )
}
