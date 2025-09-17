"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    email: "",
    linkedin: "",
    painPoint: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateLinkedIn = (url: string) => {
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/
    return linkedinRegex.test(url)
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.linkedin) {
      newErrors.linkedin = "LinkedIn profile URL is required"
    } else if (!validateLinkedIn(formData.linkedin)) {
      newErrors.linkedin = "Please enter a valid LinkedIn profile URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('idle')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Log form data for development (replace with actual API call)
      console.log('Form submitted:', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'final-cta-form'
      })

      // Store in localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('waitlist-submissions') || '[]')
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'final-cta-form'
      })
      localStorage.setItem('waitlist-submissions', JSON.stringify(submissions))

      setSubmitStatus('success')
      setFormData({ email: "", linkedin: "", painPoint: "" })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tired of your job applications getting ignored?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community to be among the first to access SkillVerdict and see how it works
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={() => scrollToSection("for-candidates")} className="bg-primary hover:bg-primary/90 cursor-pointer">
              Verify my skills
            </Button>
            <Button onClick={() => scrollToSection("for-vetters")} className="bg-primary hover:bg-primary/90 cursor-pointer">
              Earn by verifying
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address *"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (errors.email) {
                    setErrors({ ...errors, email: "" })
                  }
                }}
                required
                disabled={isSubmitting}
                className={`h-12 ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                type="url"
                placeholder="Your LinkedIn profile URL *"
                value={formData.linkedin}
                onChange={(e) => {
                  setFormData({ ...formData, linkedin: e.target.value })
                  if (errors.linkedin) {
                    setErrors({ ...errors, linkedin: "" })
                  }
                }}
                required
                disabled={isSubmitting}
                className={`h-12 ${
                  errors.linkedin ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                }`}
              />
              {errors.linkedin && (
                <p className="text-red-500 text-sm">
                  {errors.linkedin}
                </p>
              )}
            </div>

            <Textarea
              placeholder="Biggest pain point with job hunting (optional)"
              value={formData.painPoint}
              onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
              disabled={isSubmitting}
              className="min-h-[100px] resize-none"
            />

            <Button
              type="submit"
              disabled={isSubmitting || !formData.email || !formData.linkedin}
              className="w-full h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Securing your spot...
                </>
              ) : (
                "Secure My Spot"
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  🎉 Success! We've added you to our waitlist. You'll be among the first to know when we launch!
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">
                  ❌ Something went wrong. Please try again or contact support.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
