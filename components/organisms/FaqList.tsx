import type { FaqListProps } from '@/types/FaqList.types'
import { FaqItem } from '@/components/organisms/FaqItem'
import { cn } from '@/lib/utils'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'

export function FaqList({
  faqs,
  heading,
  headingId,
  openItems,
  onToggle,
  idPrefix,
  indexOffset = 0,
  ...props
}: FaqListProps) {
  return (
    <article className={cn('mb-16')} aria-labelledby={headingId} {...props}>
      <HeaderAndDescription heading={heading} />

      <dl className={cn('space-y-4 animate-fade-in-up')}>
        {faqs.map((faq, index) => {
          const adjustedIndex = index + indexOffset
          const isOpen = openItems.includes(adjustedIndex)

          return (
            <FaqItem
              key={`${idPrefix}-faq-${faq.question.slice(0, 20)}`}
              faq={faq}
              index={adjustedIndex}
              isOpen={isOpen}
              onToggle={onToggle}
              idPrefix={idPrefix}
            />
          )
        })}
      </dl>
    </article>
  )
}
