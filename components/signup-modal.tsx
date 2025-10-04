"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useSignupModal } from "@/contexts/signup-modal-context"
import { getUserSegmentLabel } from "@/types/form-data"
import { submitForm, mapUserTypeToApiFormat } from "@/lib/api"

export function SignupModal() {
  const { isOpen, userType, closeModal } = useSignupModal()
  const [formData, setFormData] = useState({
    email: "",
    linkedin: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      // Small delay to ensure modal is fully rendered
      const timer = setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Keyboard event handling for accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

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
      // Submit to Netlify function
      const result = await submitForm({
        email: formData.email,
        fields: {
          linkedin: formData.linkedin,
          user_type: mapUserTypeToApiFormat(userType),
          source: 'signup-modal',
        },
      })

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ email: "", linkedin: "" })

        // Store in localStorage as backup
        const submissions = JSON.parse(localStorage.getItem('waitlist-submissions') || '[]')
        submissions.push({
          ...formData,
          userType,
          timestamp: new Date().toISOString(),
          source: 'signup-modal'
        })
        localStorage.setItem('waitlist-submissions', JSON.stringify(submissions))

        // Close modal after successful submission
        setTimeout(() => {
          closeModal()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        console.error('Form submission failed:', result.error)
        setSubmitStatus('error')
        // Set specific error message if available
        if (result.error) {
          setErrors({ submit: result.error })
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrors({ submit: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent
        className="max-w-md"
        showCloseButton={false}
      >
        <DialogHeader className="relative">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-2xl font-bold text-slate-900 text-center mb-2 pr-12">
            Join SkillVerdict
          </DialogTitle>
          {userType && (
            <p className="text-sm text-blue-600 text-center mb-4 font-medium">
              {getUserSegmentLabel(userType)}
            </p>
          )}
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          role="form"
          aria-label="Signup form"
        >
            <div className="space-y-2">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                ref={firstInputRef}
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
                aria-invalid={!!errors.email}
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
                aria-invalid={!!errors.linkedin}
              />
              {errors.linkedin && (
                <p id="linkedin-error" className="text-red-500 text-sm mt-1">
                  {errors.linkedin}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formData.email || !formData.linkedin}
              className="w-full h-12 text-base btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label={isSubmitting ? "Submitting form" : "Submit signup form"}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
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
                  ❌ {errors.submit || 'Something went wrong. Please try again or contact support.'}
                </p>
              </div>
            )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
