'use client'

import { strings } from '@/lib/strings'
import { useEffect, useState } from 'react'
import { FaqList } from '@/components/organisms/FaqList'
import { generateFaqSchema } from '@/lib/seo'
import type { SectionProps } from '@/types/Sections.types'

export function FaqSection({ id }: SectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const memberFaqs = strings.faq.members
  const verifierFaqs = strings.faq.verifiers

  const allFaqs = [...memberFaqs, ...verifierFaqs]

  const faqSchema = generateFaqSchema(allFaqs)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [faqSchema])

  return (
    <section id={id} className='py-10 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <FaqList
            faqs={memberFaqs}
            heading={strings.faq.membersHeading}
            headingId='members-faq-heading'
            openItems={openItems}
            onToggle={toggleItem}
            idPrefix='member'
          />

          <FaqList
            faqs={verifierFaqs}
            heading={strings.faq.verifiersHeading}
            headingId='verifiers-faq-heading'
            openItems={openItems}
            onToggle={toggleItem}
            idPrefix='verifier'
            indexOffset={memberFaqs.length}
          />
        </div>
      </div>
    </section>
  )
}
