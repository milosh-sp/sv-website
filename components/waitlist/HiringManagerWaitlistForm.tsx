'use client'

import { useHiringManagerFormContext } from '@/contexts/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { CompanyProfileStep } from './steps/CompanyProfileStep'
import { HiringDemandStep } from './steps/HiringDemandStep'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { StatusMessage } from '@/components/ui/StatusMessage'
import { HoneypotField } from '@/components/ui/HoneypotField'

// Mock data - replace with actual data from lib/strings.ts
const COMPANY_SIZES = [
  { id: '1-10', label: '1-10 employees' },
  { id: '11-50', label: '11-50 employees' },
  { id: '51-200', label: '51-200 employees' },
  { id: '201-500', label: '201-500 employees' },
  { id: '500+', label: '500+ employees' },
]

const INDUSTRIES = [
  'Technology',
  'Finance',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Education',
  'Other',
]

const SKILL_AREAS = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'fullstack', label: 'Full Stack Development' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data Science' },
]

export function HiringManagerWaitlistForm() {
  const context = useHiringManagerFormContext()
  const form = useHiringManagerForm({
    onSuccess: () => {
      context.setSubmitStatus('success')
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    context.setIsSubmitting(true)

    try {
      await form.handleSubmit(e)
      if (form.submitStatus === 'success') {
        context.setSubmitStatus('success')
      }
    } finally {
      context.setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (context.currentStep) {
      case 1:
        return (
          <ContactConsentSection
            email={form.formData.email}
            github={form.formData.github}
            privacyConsent={form.formData.privacyConsent}
            newsletterOptIn={form.formData.newsletterOptIn}
            includeLinkedIn={false}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onEmailChange={(value) => form.handleFieldChange('email', value)}
            onGitHubChange={(value) => form.handleFieldChange('github', value)}
            onPrivacyConsentChange={(checked) =>
              context.updateFormData({ privacyConsent: String(checked) })
            }
            onNewsletterOptInChange={(checked) =>
              context.updateFormData({ newsletterOptIn: String(checked) })
            }
          />
        )
      case 2:
        return (
          <CompanyProfileStep
            companyName={form.formData.companyName}
            companySize={form.formData.companySize}
            industry={form.formData.industry}
            companyWebsite={form.formData.companyWebsite}
            companySizes={COMPANY_SIZES}
            industries={INDUSTRIES}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onCompanyNameChange={(value) =>
              form.handleFieldChange('companyName', value)
            }
            onCompanySizeChange={(value) =>
              form.handleFieldChange('companySize', value)
            }
            onIndustryChange={(value) =>
              form.handleFieldChange('industry', value)
            }
            onCompanyWebsiteChange={(value) =>
              form.handleFieldChange('companyWebsite', value)
            }
          />
        )
      case 3: {
        const skillsNeeded = JSON.parse(form.formData.skillsNeeded || '[]')
        return (
          <HiringDemandStep
            hiringDemand={form.formData.hiringDemand}
            skillsNeeded={skillsNeeded}
            challenges={form.formData.challenges}
            skillAreas={SKILL_AREAS}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onHiringDemandChange={(value) =>
              form.handleFieldChange('hiringDemand', value)
            }
            onSkillsNeededChange={(skillId, checked) => {
              const updated = checked
                ? [...skillsNeeded, skillId]
                : skillsNeeded.filter((id: string) => id !== skillId)
              form.handleFieldChange('skillsNeeded', JSON.stringify(updated))
            }}
            onChallengesChange={(value) =>
              form.handleFieldChange('challenges', value)
            }
          />
        )
      }
      default:
        return null
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 w-full max-w-2xl mx-auto'
      noValidate
    >
      {/* Progress indicator */}
      <div className='flex justify-between items-center mb-8'>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`flex-1 h-1 mx-1 rounded-full ${
              step <= context.currentStep ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Current step */}
      <div>{renderStep()}</div>

      {/* Honeypot field */}
      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder='https://example.com'
        value={form.honeypotValue}
        onChange={(e) => form.handleHoneypotChange(e.target.value)}
        label='Website'
      />

      {/* Status messages */}
      {form.submitStatus === 'error' && form.errors.submit && (
        <StatusMessage
          status='error'
          errorMessage={form.errors.submit}
          errorIcon='❌'
          successIcon='🎉'
          successMessage='Success!'
          defaultErrorMessage='An error occurred. Please try again.'
        />
      )}

      {/* Navigation buttons */}
      <div className='flex justify-between gap-4'>
        <button
          type='button'
          onClick={() => context.previousStep()}
          disabled={context.currentStep === 1 || form.isSubmitting}
          className='px-6 py-2 border border-gray-300 rounded-md disabled:opacity-50'
        >
          Previous
        </button>

        {context.currentStep < 3 ? (
          <button
            type='button'
            onClick={() => context.nextStep()}
            disabled={form.isSubmitting}
            className='px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50'
          >
            Next
          </button>
        ) : (
          <SubmitButton
            isSubmitting={form.isSubmitting}
            isDisabled={form.isSubmitting}
            ariaLabel='Submit hiring manager form'
            idleText='Submit'
            loadingText='Submitting...'
          />
        )}
      </div>
    </form>
  )
}
