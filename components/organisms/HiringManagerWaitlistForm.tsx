'use client'

import { ContactConsentSection } from './ContactConsentSection'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { HiringManagerCompanyProfileStep } from '@/components/molecules/HiringManagerCompanyProfileStep'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useHiringManagerForm } from '@/hooks/useHiringManagerForm'
import { strings } from '@/lib/strings'
import { validateHiringManagerStep } from '@/lib/waitlistFormValidators'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'
import type { ReactNode } from 'react'
import { SuccessScreen } from './SuccessScreen'
import { PageLayout } from '@/components/templates/PageLayout'
import { PageHeader } from '@/components/molecules/PageHeader'
import { STEP_IDS } from '@/lib/stepIdentifiers'
import type { StepId } from '@/types/netlify.types'
import { cn } from '@/lib/utils'
import { HeroButtons } from '@/components/molecules/HeroButtons'
import { Text } from '@/components/atoms/Text'

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
  const form = useHiringManagerForm()

  const stepRenderers: Record<StepId, () => ReactNode> = {
    [STEP_IDS.STEP_1]: () => {
      return (
        <ContactConsentSection
          email={form.formData.email}
          companyUrl={form.formData.companyUrl}
          newsletterOptIn={form.formData.newsletterOptIn}
          fields={['name', 'email', 'newsletterOptIn', 'companyUrl']}
          errors={form.errors}
          isSubmitting={form.isSubmitting}
          onEmailChange={(value) => form.handleFieldChange('email', value)}
          onNewsletterOptInChange={(checked) =>
            form.handleFieldChange('newsletterOptIn', String(checked))
          }
          onCompanyUrlChange={(value) =>
            form.handleFieldChange('companyUrl', value)
          }
          namePlaceholder={strings.waitlistForms.fields.name.companyPlaceholder}
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
              otherValue: form.formData.rolesHiringOther,
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
              otherValue: form.formData.hiringFrustrationsOther,
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
              otherValue: form.formData.hiringFailuresOther,
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
    const renderer = stepRenderers[form.currentStep]
    return renderer ? renderer() : null
  }

  const isCurrentStepValid = validateHiringManagerStep(
    form.currentStep,
    form.formData
  ).isValid

  if (form.submitStatus === 'success') {
    return <SuccessScreen personaType='hiring-manager' />
  }

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />

      <Text className='text-center mb-1'>
        {strings.waitlistForms.ctaToOtherForms}
      </Text>

      <div className={cn('flex justify-center align-center')}>
        <HeroButtons showCandidate showVerifier />
      </div>
      <WaitlistFormWrapper
        currentStep={form.currentStep}
        totalSteps={totalFormSteps}
        isSubmitting={form.isSubmitting}
        isCurrentStepValid={isCurrentStepValid}
        submitStatus={form.submitStatus}
        errors={form.errors}
        honeypotValue={form.honeypotValue}
        onHoneypotChange={(value) => form.handleHoneypotChange(value)}
        onStepClick={(step) => form.goToStep(step)}
        onPrevious={() => form.previousStep()}
        onNext={() => form.nextStep()}
        onSubmit={form.handleStepSubmit}
        formData={form.formData}
      >
        {renderStep()}
      </WaitlistFormWrapper>
    </PageLayout>
  )
}
