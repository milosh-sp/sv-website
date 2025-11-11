'use client'

import { useHiringManagerFormContext } from '@/contexts/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { HiringManagerCompanyProfileStep } from './steps/HiringManagerCompanyProfileStep'
import { HiringDemandChallengesStep } from './steps/HiringDemandChallengesStep'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { StatusMessage } from '@/components/ui/StatusMessage'
import { HoneypotField } from '@/components/ui/HoneypotField'

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
          <HiringManagerCompanyProfileStep
            managerRole={form.formData.managerRole}
            fundingStage={form.formData.fundingStage}
            engineeringTeamSize={form.formData.engineeringTeamSize}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onManagerRoleChange={(value) =>
              form.handleFieldChange('managerRole', value)
            }
            onFundingStagChange={(value) =>
              form.handleFieldChange('fundingStage', value)
            }
            onEngineeringTeamSizeChange={(value) =>
              form.handleFieldChange('engineeringTeamSize', value)
            }
          />
        )
      case 3:
        return (
          <HiringDemandChallengesStep
            rolesHiring={form.formData.rolesHiring}
            seniorityLevel={form.formData.seniorityLevel}
            hiringInterviewHours={form.formData.hiringInterviewHours}
            hiringFrustrations={form.formData.hiringFrustrations}
            hiringFailures={form.formData.hiringFailures}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onRolesHiringChange={(values) =>
              form.handleFieldChange('rolesHiring', JSON.stringify(values))
            }
            onSeniorityLevelChange={(value) =>
              form.handleFieldChange('seniorityLevel', value)
            }
            onHiringInterviewHoursChange={(value) =>
              form.handleFieldChange('hiringInterviewHours', value)
            }
            onHiringFrustrationsChange={(values) =>
              form.handleFieldChange(
                'hiringFrustrations',
                JSON.stringify(values)
              )
            }
            onHiringFailuresChange={(values) =>
              form.handleFieldChange('hiringFailures', JSON.stringify(values))
            }
          />
        )
      case 4:
        return null
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
        {[1, 2, 3, 4].map((step) => (
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

        {context.currentStep < 4 ? (
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
