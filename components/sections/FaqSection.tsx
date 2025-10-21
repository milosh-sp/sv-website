'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { generateFAQSchema } from '@/lib/seo'
import { strings } from '@/lib/strings'

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  const memberFAQs = strings.faq.members
  const verifierFAQs = strings.faq.verifiers

  const allFAQs = useMemo(
    () => [...memberFAQs, ...verifierFAQs],
    [memberFAQs, verifierFAQs]
  )

  const faqSchema = useMemo(() => generateFAQSchema(allFAQs), [allFAQs])

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
    <section
      id='faq'
      className='py-20 bg-gray-50'
      aria-labelledby='faq-heading'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto'>
          <h1 id='faq-heading' className='sr-only'>
            {strings.faq.mainHeading}
          </h1>

          <article className='mb-16' aria-labelledby='members-faq-heading'>
            <h2
              id='members-faq-heading'
              className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'
            >
              {strings.faq.membersHeading}
            </h2>

            <dl className='space-y-4'>
              {memberFAQs.map((faq, index) => {
                const isOpen = openItems.includes(index)
                const buttonId = `faq-button-member-${index}`
                const panelId = `faq-panel-member-${index}`

                return (
                  <div
                    key={`member-faq-${faq.question.slice(0, 20)}`}
                    className='bg-white rounded-lg border border-gray-200 overflow-hidden'
                  >
                    <dt>
                      <button
                        id={buttonId}
                        onClick={() => toggleItem(index)}
                        className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        type='button'
                      >
                        <span className='font-semibold text-gray-900'>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden='true'
                        />
                      </button>
                    </dt>
                    <dd
                      id={panelId}
                      className={`px-6 pb-4 border-t border-gray-100 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <p className='text-gray-600 pt-4'>{faq.answer}</p>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </article>

          <article aria-labelledby='verifiers-faq-heading'>
            <h2
              id='verifiers-faq-heading'
              className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'
            >
              {strings.faq.verifiersHeading}
            </h2>

            <dl className='space-y-4'>
              {verifierFAQs.map((faq, index) => {
                const adjustedIndex = index + memberFAQs.length
                const isOpen = openItems.includes(adjustedIndex)
                const buttonId = `faq-button-verifier-${index}`
                const panelId = `faq-panel-verifier-${index}`

                return (
                  <div
                    key={`verifier-faq-${faq.question.slice(0, 20)}`}
                    className='bg-white rounded-lg border border-gray-200 overflow-hidden'
                  >
                    <dt>
                      <button
                        id={buttonId}
                        type='button'
                        onClick={() => toggleItem(adjustedIndex)}
                        className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset'
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className='font-semibold text-gray-900'>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden='true'
                        />
                      </button>
                    </dt>
                    <dd
                      id={panelId}
                      className={`px-6 pb-4 border-t border-gray-100 ${
                        isOpen ? 'block' : 'hidden'
                      }`}
                    >
                      <p className='text-gray-600 pt-4'>{faq.answer}</p>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </article>
        </div>
      </div>
    </section>
  )
}
