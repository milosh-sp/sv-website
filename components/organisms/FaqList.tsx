import type { FaqListProps } from '@/types/FaqList.types'
import { FaqItem } from '@/components/organisms/FaqItem'

export const FaqList = ({
  faqs,
  heading,
  headingId,
  openItems,
  onToggle,
  idPrefix,
  indexOffset = 0,
  ...props
}: FaqListProps) => (
  <article className='mb-16' aria-labelledby={headingId} {...props}>
    <h2
      id={headingId}
      className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'
    >
      {heading}
    </h2>

    <dl className='space-y-4'>
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
