"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { generateFAQSchema } from "@/lib/seo"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const memberFAQs = [
    {
      question: "How does the verification process work?",
      answer:
        "Our verification process involves a multi-step evaluation where your skills are assessed by experienced tech professionals in the field. Our tech professionals come from different backgrounds and companies like Google, Netflix, Airbnb, Amazon, Meta and many more. Once verified, your skills are permanently recorded and can be easily validated by employers through QR codes or direct links.",
    },
    {
      question: "How long does it take to get verified?",
      answer:
        "The verification process typically takes 3-5 business days, depending on the complexity of the skills being assessed and the availability of our verifiers.",
    },
    {
      question: "Can I update my skills after verification?",
      answer:
        "Yes, you can always add new skills or request re-verification of existing skills as you continue to develop your expertise. The platform is designed to grow with your career.",
    },
    {
      question: "How do employers verify my skills?",
      answer:
        "Employers can verify your skills by scanning the QR code on your digital CV or by visiting your unique profile URL. They'll see a complete verification history with timestamps and reviewer credentials.",
    },
    {
      question: "I am not happy with my verification outcome, what can I do?",
      answer:
        "You can always submit a complaint if you think you have not been treated fairly. We will investigate your complaint, if your claim turns out to be true, we will assign a new verifier to your case.",
    },
    {
      question: "Can I become a verifier as well and earn?",
      answer:
        "Of course you can, after you have verified the skills you want to verify other members skills with, you can apply and go through the become a verifier process.",
    },
    {
      question: "Is my data and code safe? Who can see my verification results?",
      answer:
        "Your privacy is paramount. Your specific code and assignment solutions are only visible to the verifiers assigned to you. Your public profile and CV2.0 will only show the skills you choose to make public and their verification status. You have full control over your visibility settings.",
    },
  ]

  const verifierFAQs = [
    {
      question: "How much can I earn as a verifier?",
      answer:
        "Earnings are based on a share of the verification fee for each assessment you complete. The more complex the skill, the higher the fee and your potential earnings. We provide a clear breakdown of potential earnings in your verifier dashboard.",
    },
    {
      question: "What's the time commitment for being a verifier?",
      answer:
        "There is no minimum time commitment. You can choose to take on as many or as few verification tasks as your schedule allows. The platform is designed for flexibility.",
    },
    {
      question: 'How does the "AI-assisted dashboard" help me?',
      answer:
        "Our dashboard helps you streamline the review process. It can help with initial code analysis, flagging common patterns, managing your queue of assignments, and generating structured feedback templates, allowing you to focus on the high-level assessment.",
    },
    {
      question: "What happens if a candidate disputes my assessment?",
      answer:
        "Our admin team will review the dispute neutrally. If your feedback is found to be constructive, professional, and accurate, your rating and standing will be unaffected. This system protects verifiers from frivolous disputes while ensuring fairness for candidates.",
    },
  ]

  // Combine all FAQs for structured data
  const allFAQs = [...memberFAQs, ...verifierFAQs]

  useEffect(() => {
    // Add FAQ structured data to the page
    const script = document.createElement("script")
    script.type = "application/ld+json"
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
    <section id="faq" className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page heading for accessibility */}
          <h1 id="faq-heading" className="sr-only">Frequently Asked Questions</h1>

          {/* Members FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently asked questions for members
            </h2>

            <div className="space-y-4" role="list">
              {memberFAQs.map((faq, index) => {
                const isOpen = openItems.includes(index)
                const buttonId = `faq-button-${index}`
                const panelId = `faq-panel-${index}`

                return (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden" role="listitem">
                    <h3>
                      <button
                        id={buttonId}
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        type="button"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-transform ${
                            isOpen ? "rotate-180" : ""
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
              Frequently asked questions for verifiers
            </h2>

            <div className="space-y-4">
              {verifierFAQs.map((faq, index) => {
                const adjustedIndex = index + memberFAQs.length
                return (
                  <div key={adjustedIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleItem(adjustedIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-primary transition-transform ${
                          openItems.includes(adjustedIndex) ? "rotate-180" : ""
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
