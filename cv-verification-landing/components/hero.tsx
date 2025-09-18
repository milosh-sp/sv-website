"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Clock, UserCheck } from "lucide-react"
import type { WaitlistFormData } from "@/types/form-data"

export function Hero() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    email: "",
    linkedin: "",
    painPoint: "",
    userType: null,
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

    if (!formData.userType) {
      newErrors.userType = "Please select whether you want to verify your skills or earn by verifying"
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
        source: 'hero-form'
      })

      // Store in localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('waitlist-submissions') || '[]')
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'hero-form'
      })
      localStorage.setItem('waitlist-submissions', JSON.stringify(submissions))

      setSubmitStatus('success')
      setFormData({ email: "", linkedin: "", painPoint: "", userType: null })
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
    <section
      id="home"
      className="section-padding gradient-hero min-h-screen flex items-center"
      role="banner"
      aria-label="Hero section"
    >
      <div className="container-narrow">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-display-1 text-slate-900 mb-6 text-balance">
            Don't let your CV be ignored by AI and HR, get your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CV2.0</span>{" "}
            today
          </h1>

          <p className="text-body-large text-slate-600 mb-8 max-w-4xl mx-auto text-pretty">
            SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from
            leading companies verify your skills. Replace empty resume claims with proven endorsements, build your CV2.0
            and get hired faster, or earn income by selling your own credibility as a tech professional
          </p>

          <p className="text-lg text-slate-700 mb-8 font-medium">
            Choose your path to get started:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant={formData.userType === 'verify-skills' ? "default" : "outline"}
              size="lg"
              onClick={() => {
                setFormData({ ...formData, userType: 'verify-skills' })
                if (errors.userType) {
                  setErrors({ ...errors, userType: "" })
                }
                scrollToSection("for-candidates")
              }}
              className={`h-14 px-8 text-lg cursor-pointer transition-all duration-200 ${
                formData.userType === 'verify-skills'
                  ? "btn-primary ring-2 ring-blue-500 ring-offset-2"
                  : "btn-secondary hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
              }`}
              aria-label="Select to verify your skills and learn more about skill verification for candidates"
              aria-pressed={formData.userType === 'verify-skills'}
            >
              Verify my skills
            </Button>
            <Button
              variant={formData.userType === 'earn-by-verifying' ? "default" : "outline"}
              size="lg"
              onClick={() => {
                setFormData({ ...formData, userType: 'earn-by-verifying' })
                if (errors.userType) {
                  setErrors({ ...errors, userType: "" })
                }
                scrollToSection("for-vetters")
              }}
              className={`h-14 px-8 text-lg cursor-pointer transition-all duration-200 ${
                formData.userType === 'earn-by-verifying'
                  ? "btn-primary ring-2 ring-blue-500 ring-offset-2"
                  : "btn-secondary hover:ring-2 hover:ring-blue-300 hover:ring-offset-2"
              }`}
              aria-label="Select to earn by verifying skills and learn more about earning opportunities"
              aria-pressed={formData.userType === 'earn-by-verifying'}
            >
              Earn by verifying
            </Button>
          </div>

          {/* User Type Selection Error */}
          {errors.userType && (
            <div className="max-w-lg mx-auto mb-4">
              <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">
                {errors.userType}
              </p>
            </div>
          )}

          <div className="max-w-lg mx-auto mb-16">
            <form
              onSubmit={handleSubmit}
              className="card-modern p-8 space-y-6"
              role="form"
              aria-label="Waitlist signup form"
            >
              <div className="space-y-2">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="email"
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
                  className={`h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="linkedin" className="sr-only">
                  LinkedIn profile URL
                </label>
                <Input
                  id="linkedin"
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
                  className={`h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 ${
                    errors.linkedin ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                  }`}
                  aria-describedby="linkedin-error"
                />
                {errors.linkedin && (
                  <p id="linkedin-error" className="text-red-500 text-sm mt-1">
                    {errors.linkedin}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="painPoint" className="sr-only">
                  Biggest pain point with job hunting
                </label>
                <Textarea
                  id="painPoint"
                  placeholder="Biggest pain point with job hunting (optional)"
                  value={formData.painPoint}
                  onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                  disabled={isSubmitting}
                  className="min-h-[120px] resize-none text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.email || !formData.linkedin || !formData.userType}
                className="w-full h-14 text-lg btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label={isSubmitting ? "Submitting form" : "Submit waitlist form"}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Securing your spot...
                  </>
                ) : (
                  "Secure my spot"
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <Shield className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">100% Secure & transparent</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <Clock className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">No time commitment</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-white/20">
              <UserCheck className="h-5 w-5 text-emerald-500" aria-hidden="true" />
              <span className="font-medium text-slate-700">Verified by world's top talent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
