'use client'

import { useHiringManagerFormContext } from '@/contexts/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { validateHiringManagerStep } from '@/lib/WaitlistValidation'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { HiringManagerCompanyProfileStep } from './steps/HiringManagerCompanyProfileStep'
import { HiringDemandChallengesStep } from './steps/HiringDemandChallengesStep'
import { ProgressIndicator } from './ui/ProgressIndicator'
import { FormNavigation } from './ui/FormNavigation'
import { HoneypotField } from '@/components/ui/HoneypotField'
import { StatusMessage } from '@/components/ui/StatusMessage'

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
            privacyConsent={form.formData.privacyConsent}
            newsletterOptIn={form.formData.newsletterOptIn}
            includeLinkedIn={false}
            includeGitHub={false}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onEmailChange={(value) => form.handleFieldChange('email', value)}
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

  const isCurrentStepValid = validateHiringManagerStep(
    context.currentStep,
    form.formData
  ).isValid

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 w-full max-w-2xl mx-auto'
      noValidate
    >
      <ProgressIndicator
        currentStep={context.currentStep}
        totalSteps={4}
        onStepClick={(step) => {
          const canClickStep = step <= context.currentStep && isCurrentStepValid
          if (canClickStep) {
            context.goToStep(step)
          }
        }}
        isSubmitting={form.isSubmitting}
        isStepClickable={(step: number) =>
          step <= context.currentStep && isCurrentStepValid
        }
      />

      <div>{renderStep()}</div>

      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder='https://example.com'
        value={form.honeypotValue}
        onChange={(e) => form.handleHoneypotChange(e.target.value)}
        label='Website'
      />

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

      <FormNavigation
        currentStep={context.currentStep}
        totalSteps={4}
        isSubmitting={form.isSubmitting}
        canProceed={isCurrentStepValid}
        onPrevious={() => context.previousStep()}
        onNext={() => context.nextStep()}
        submitAriaLabel='Submit hiring manager form'
        submitLabel='Submit'
        submitLoadingLabel='Submitting...'
      />
    </form>
  )
}
