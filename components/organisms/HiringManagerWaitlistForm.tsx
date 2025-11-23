'use client'

import { ContactConsentSection } from '@/components/molecules/ContactConsentSection'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { HiringManagerCompanyProfileStep } from '@/components/molecules/HiringManagerCompanyProfileStep'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useHiringManagerFormContext } from '@/context/HiringManagerFormContext'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { strings } from '@/lib/strings'
import { validateHiringManagerStep } from '@/lib/waitlistFormValidators'
import { STEP_IDS, type StepId } from '@/lib/stepIdentifiers'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'
import type { ReactNode } from 'react'
import { SuccessScreen } from './SuccessScreen'
import { PageLayout } from '../templates/PageLayout'
import { PageHeader } from '../molecules/PageHeader'

const {
  hiringFailureOptions,
  interviewHoursOptions,
  rolesHiringOptions,
  seniorityLevelOptions,
  totalFormSteps,
  hiringFrustrationOptions,
  pageHeaders: {
    'hiring-manager': { title, description },
  },
} = strings.waitlistForms

export function HiringManagerWaitlistForm() {
  const context = useHiringManagerFormContext()
  const form = useHiringManagerForm({
    currentStep: context.currentStep,
    onSuccess: () => {
      // On step 1 we do a silent submit, so we need to reset the status to initial
      context.setSubmitStatus(
        context.currentStep === 'step1' ? 'idle' : 'success'
      )

      if (context.currentStep === 'step1') {
        context.goToStep('step2')
        context.setSubmitStatus('idle')
      }
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
          companyUrl={form.formData.companyUrl}
          newsletterOptIn={form.formData.newsletterOptIn}
          fields={stepFields}
          errors={form.errors}
          isSubmitting={form.isSubmitting}
          onEmailChange={(value) => form.handleFieldChange('email', value)}
          onNewsletterOptInChange={(checked) =>
            form.handleFieldChange('newsletterOptIn', String(checked))
          }
          onCompanyUrlChange={(value) =>
            form.handleFieldChange('companyUrl', value)
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
          type: 'checkbox',
          label: strings.waitlistForms.labels.seniorityLevel,
          options: seniorityLevelOptions,
          value: form.formData.seniorityLevel,
          onChange: (values) =>
            form.handleFieldChange('seniorityLevel', JSON.stringify(values)),
          otherFieldId: 'seniorityLevelOther',
          onOtherChange: (value) =>
            form.handleFieldChange('seniorityLevelOther', value),
          error: form.errors.seniorityLevel,
        },
        {
          id: 'hiringInterviewHours',
          type: 'radio',
          label: strings.waitlistForms.labels.hiringInterviewHours,
          options: interviewHoursOptions,
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
              options: rolesHiringOptions,
              value: form.formData.rolesHiring,
              onChange: (values) =>
                form.handleFieldChange('rolesHiring', JSON.stringify(values)),
              otherFieldId: 'rolesHiringOther',
              onOtherChange: (value) =>
                form.handleFieldChange('rolesHiringOther', value),
              error: form.errors.rolesHiring,
            },
            {
              id: 'hiringFrustrations',
              type: 'checkbox',
              label: strings.waitlistForms.labels.hiringFrustrations,
              options: hiringFrustrationOptions,
              value: form.formData.hiringFrustrations,
              onChange: (values) =>
                form.handleFieldChange(
                  'hiringFrustrations',
                  JSON.stringify(values)
                ),
              otherFieldId: 'hiringFrustrationsOther',
              onOtherChange: (value) =>
                form.handleFieldChange('hiringFrustrationsOther', value),
              error: form.errors.hiringFrustrations,
            },
            {
              id: 'hiringFailures',
              type: 'checkbox',
              label: strings.waitlistForms.labels.hiringFailures,
              options: hiringFailureOptions,
              value: form.formData.hiringFailures,
              onChange: (values) =>
                form.handleFieldChange(
                  'hiringFailures',
                  JSON.stringify(values)
                ),
              otherFieldId: 'hiringFailuresOther',
              onOtherChange: (value) =>
                form.handleFieldChange('hiringFailuresOther', value),
              error: form.errors.hiringFailures,
            },
          ]}
          isSubmitting={form.isSubmitting}
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

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='hiring-manager' />
  }

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />
      <WaitlistFormWrapper
        currentStep={context.currentStep}
        totalSteps={totalFormSteps}
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
    </PageLayout>
  )
}
