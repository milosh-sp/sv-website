'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { generateFAQSchema } from '@/lib/seo'
import { strings } from '@/lib/strings'

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  // Use centralized FAQ content
  const memberFAQs = strings.faq.members
  const verifierFAQs = strings.faq.verifiers

  // Combine all FAQs for structured data
  const allFAQs = [...memberFAQs, ...verifierFAQs]

  useEffect(() => {
    // Add FAQ structured data to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(generateFAQSchema(allFAQs))
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <section
      id="faq"
      className="py-20 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page heading for accessibility */}
          <h1 id="faq-heading" className="sr-only">
            {strings.faq.mainHeading}
          </h1>

          {/* Members FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              {strings.faq.membersHeading}
            </h2>

            <div className="space-y-4" role="list">
              {memberFAQs.map((faq, index) => {
                const isOpen = openItems.includes(index)
                const buttonId = `faq-button-${index}`
                const panelId = `faq-panel-${index}`

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                    role="listitem"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        type="button"
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={panelId}
                        className="px-6 pb-4 border-t border-gray-100"
                        role="region"
                        aria-labelledby={buttonId}
                      >
                        <p className="text-gray-600 pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Verifiers FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              {strings.faq.verifiersHeading}
            </h2>

            <div className="space-y-4">
              {verifierFAQs.map((faq, index) => {
                const adjustedIndex = index + memberFAQs.length
                return (
                  <div
                    key={adjustedIndex}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(adjustedIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform ${
                          openItems.includes(adjustedIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openItems.includes(adjustedIndex) && (
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
