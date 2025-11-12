'use client'

import { useHiringManagerFormContext } from '@/contexts/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { validateHiringManagerStep } from '@/lib/waitlistFormValidators'
import {
  TOTAL_FORM_STEPS,
  ROLES_HIRING_OPTIONS,
  SENIORITY_LEVEL_OPTIONS,
  INTERVIEW_HOURS_OPTIONS,
  HIRING_FRUSTRATIONS_OPTIONS,
  HIRING_FAILURES_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { HiringManagerCompanyProfileStep } from './steps/HiringManagerCompanyProfileStep'
import { FormFieldsStep } from './steps/FormFieldsStep'
import { WaitlistFormWrapper } from './WaitlistFormWrapper'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'

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
            newsletterOptIn={form.formData.newsletterOptIn}
            includeLinkedIn={false}
            includeGitHub={false}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onEmailChange={(value) => form.handleFieldChange('email', value)}
            onNewsletterOptInChange={(checked) =>
              form.handleFieldChange('newsletterOptIn', String(checked))
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
      case 3: {
        const fields: FormFieldConfig[] = [
          {
            id: 'rolesHiring',
            type: 'checkbox',
            label: strings.waitlistForms.labels.rolesHiring,
            description: 'Select all that apply',
            options: ROLES_HIRING_OPTIONS,
            value: form.formData.rolesHiring,
            onChange: (values) =>
              form.handleFieldChange('rolesHiring', JSON.stringify(values)),
            error: form.errors.rolesHiring,
          },
          {
            id: 'seniorityLevel',
            type: 'radio',
            label: strings.waitlistForms.labels.seniorityLevel,
            options: SENIORITY_LEVEL_OPTIONS,
            value: form.formData.seniorityLevel,
            onChange: (value) =>
              form.handleFieldChange('seniorityLevel', value as string),
            error: form.errors.seniorityLevel,
          },
          {
            id: 'hiringInterviewHours',
            type: 'radio',
            label: strings.waitlistForms.labels.hiringInterviewHours,
            options: INTERVIEW_HOURS_OPTIONS,
            value: form.formData.hiringInterviewHours,
            onChange: (value) =>
              form.handleFieldChange('hiringInterviewHours', value as string),
            error: form.errors.hiringInterviewHours,
          },
          {
            id: 'hiringFrustrations',
            type: 'checkbox',
            label: strings.waitlistForms.labels.hiringFrustrations,
            description: 'Select all that apply',
            options: HIRING_FRUSTRATIONS_OPTIONS,
            value: form.formData.hiringFrustrations,
            onChange: (values) =>
              form.handleFieldChange(
                'hiringFrustrations',
                JSON.stringify(values)
              ),
            error: form.errors.hiringFrustrations,
          },
          {
            id: 'hiringFailures',
            type: 'checkbox',
            label: strings.waitlistForms.labels.hiringFailures,
            description: 'Select all that apply',
            options: HIRING_FAILURES_OPTIONS,
            value: form.formData.hiringFailures,
            onChange: (values) =>
              form.handleFieldChange('hiringFailures', JSON.stringify(values)),
            error: form.errors.hiringFailures,
          },
        ]
        return (
          <FormFieldsStep fields={fields} isSubmitting={form.isSubmitting} />
        )
      }
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
    <WaitlistFormWrapper
      currentStep={context.currentStep}
      totalSteps={TOTAL_FORM_STEPS}
      isSubmitting={form.isSubmitting}
      isCurrentStepValid={isCurrentStepValid}
      submitStatus={form.submitStatus}
      errors={form.errors}
      honeypotValue={form.honeypotValue}
      onHoneypotChange={(value) => form.handleHoneypotChange(value)}
      onStepClick={(step) => context.goToStep(step)}
      onPrevious={() => context.previousStep()}
      onNext={() => context.nextStep()}
      onSubmit={handleSubmit}
    >
      {renderStep()}
    </WaitlistFormWrapper>
  )
}
