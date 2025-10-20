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

  // Use centralized FAQ content
  const memberFAQs = strings.faq.members
  const verifierFAQs = strings.faq.verifiers

  // Combine all FAQs for structured data - memoized to prevent recalculation
  const allFAQs = useMemo(
    () => [...memberFAQs, ...verifierFAQs],
    [memberFAQs, verifierFAQs]
  )

  // Generate FAQ schema once
  const faqSchema = useMemo(() => generateFAQSchema(allFAQs), [allFAQs])

  useEffect(() => {
    // Add FAQ structured data to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove the script when component unmounts
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
          {/* Page heading for accessibility */}
          <h1 id='faq-heading' className='sr-only'>
            {strings.faq.mainHeading}
          </h1>

          {/* Members FAQ */}
          <div className='mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'>
              {strings.faq.membersHeading}
            </h2>

            <ul className='space-y-4'>
              {memberFAQs.map((faq, index) => {
                const isOpen = openItems.includes(index)
                const buttonId = `faq-button-member-${index}`
                const panelId = `faq-panel-member-${index}`

                return (
                  <li
                    key={`member-faq-${faq.question.slice(0, 20)}`}
                    className='bg-white rounded-lg border border-gray-200 overflow-hidden'
                  >
                    <h3>
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
                    </h3>
                    {isOpen && (
                      <section
                        id={panelId}
                        className='px-6 pb-4 border-t border-gray-100'
                        aria-labelledby={buttonId}
                      >
                        <p className='text-gray-600 pt-4'>{faq.answer}</p>
                      </section>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Verifiers FAQ */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12'>
              {strings.faq.verifiersHeading}
            </h2>

            <ul className='space-y-4'>
              {verifierFAQs.map((faq, index) => {
                const adjustedIndex = index + memberFAQs.length
                const isOpen = openItems.includes(adjustedIndex)
                const buttonId = `faq-button-verifier-${index}`
                const panelId = `faq-panel-verifier-${index}`

                return (
                  <li
                    key={`verifier-faq-${faq.question.slice(0, 20)}`}
                    className='bg-white rounded-lg border border-gray-200 overflow-hidden'
                  >
                    <h3>
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
                    </h3>
                    {isOpen && (
                      <section
                        id={panelId}
                        className='px-6 pb-4 border-t border-gray-100'
                        aria-labelledby={buttonId}
                      >
                        <p className='text-gray-600 pt-4'>{faq.answer}</p>
                      </section>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
