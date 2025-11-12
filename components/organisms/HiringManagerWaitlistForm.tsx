'use client'

import { ContactConsentSection } from '@/components/molecules/ContactConsentSection'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { HiringManagerCompanyProfileStep } from '@/components/molecules/HiringManagerCompanyProfileStep'
import { PrivacyPolicyConsent } from '@/components/molecules/PrivacyPolicyConsent'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useHiringManagerFormContext } from '@/context/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import {
  HIRING_FAILURES_OPTIONS,
  HIRING_FRUSTRATIONS_OPTIONS,
  INTERVIEW_HOURS_OPTIONS,
  ROLES_HIRING_OPTIONS,
  SENIORITY_LEVEL_OPTIONS,
  TOTAL_FORM_STEPS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import { validateHiringManagerStep } from '@/lib/waitlistFormValidators'
import { STEP_IDS, type StepId } from '@/lib/stepIdentifiers'

import type { FormFieldConfig } from '@/types/FormFieldsStep.types'
import type { ReactNode } from 'react'

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

  const stepRenderers: Record<StepId, () => ReactNode> = {
    [STEP_IDS.STEP_1]: () => {
      const stepFields =
        strings.waitlistForms.stepConfigs['hiring-manager'][0].fields
      return (
        <ContactConsentSection
          email={form.formData.email}
          newsletterOptIn={form.formData.newsletterOptIn}
          fields={stepFields}
          errors={form.errors}
          isSubmitting={form.isSubmitting}
          onEmailChange={(value) => form.handleFieldChange('email', value)}
          onNewsletterOptInChange={(checked) =>
            form.handleFieldChange('newsletterOptIn', String(checked))
          }
        />
      )
    },
    [STEP_IDS.STEP_2]: () => (
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
    ),
    [STEP_IDS.STEP_3]: () => {
      const fields: FormFieldConfig[] = [
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
      ]
      return <FormFieldsStep fields={fields} isSubmitting={form.isSubmitting} />
    },
    [STEP_IDS.STEP_4]: () => (
      <>
        <FormFieldsStep
          fields={[
            {
              id: 'rolesHiring',
              type: 'checkbox',
              label: strings.waitlistForms.labels.rolesHiring,
              options: ROLES_HIRING_OPTIONS,
              value: form.formData.rolesHiring,
              onChange: (values) =>
                form.handleFieldChange('rolesHiring', JSON.stringify(values)),
              error: form.errors.rolesHiring,
            },
            {
              id: 'hiringFrustrations',
              type: 'checkbox',
              label: strings.waitlistForms.labels.hiringFrustrations,
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
              options: HIRING_FAILURES_OPTIONS,
              value: form.formData.hiringFailures,
              onChange: (values) =>
                form.handleFieldChange(
                  'hiringFailures',
                  JSON.stringify(values)
                ),
              error: form.errors.hiringFailures,
            },
          ]}
          isSubmitting={form.isSubmitting}
        />
        <PrivacyPolicyConsent
          prefix={strings.waitlistForms.privacyPolicyConsent.prefix}
          linkText={strings.waitlistForms.privacyPolicyConsent.linkText}
          href={strings.waitlistForms.privacyPolicyConsent.href}
          ariaLabel={strings.waitlistForms.privacyPolicyConsent.ariaLabel}
        />
      </>
    ),
  }

  const renderStep = () => {
    const renderer = stepRenderers[context.currentStep]
    return renderer ? renderer() : null
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
      formData={form.formData}
    >
      {renderStep()}
    </WaitlistFormWrapper>
  )
}
