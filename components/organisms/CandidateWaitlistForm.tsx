'use client'

import { CandidateProfileStep } from '@/components/molecules/CandidateProfileStep'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { SkillAreasSection } from '@/components/molecules/SkillAreasSection'
import { TechnicalSkillsSection } from '@/components/molecules/TechnicalSkillsSection'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useCandidateFormContext } from '@/context/CandidateFormContext'
import { useCandidateForm } from '@/hooks/useCandidateForm'
import { strings } from '@/lib/strings'
import { validateCandidateStep } from '@/lib/waitlistFormValidators'
import { cn } from '@/lib/utils'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'
import type { ReactNode } from 'react'
import { SuccessScreen } from './SuccessScreen'
import { PageLayout } from '../templates/PageLayout'
import { PageHeader } from '../molecules/PageHeader'
import { STEP_IDS } from '@/lib/stepIdentifiers'
import type { StepId } from '@/types/netlify.types'
import { ContactConsentSection } from './ContactConsentSection'

const {
  jobSearchChallengeOptions,
  skillValidationOptions,
  totalFormSteps,
  valuableOutcomeOptions,
  pageHeaders: {
    candidate: { title, description },
  },
} = strings.waitlistForms

export function CandidateWaitlistForm() {
  const context = useCandidateFormContext()
  const form = useCandidateForm({
    currentStep: context.currentStep,
    onSuccess: () => {
      // On step 1 we do a silent submit, so we need to reset the status to initial
      context.setSubmitStatus(
        context.currentStep === 'step1' ? 'idle' : 'success'
      )

      if (context.currentStep === 'step1') {
        context.goToStep('step2')
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
      return (
        <ContactConsentSection
          name={form.formData.name}
          email={form.formData.email}
          linkedIn={form.formData.linkedIn}
          githubGitlabUrl={form.formData.githubGitlabUrl}
          newsletterOptIn={form.formData.newsletterOptIn}
          fields={[
            'name',
            'email',
            'linkedIn',
            'githubGitlabUrl',
            'newsletterOptIn',
          ]}
          errors={form.errors}
          isSubmitting={form.isSubmitting}
          onNameChange={(value) => form.handleFieldChange('name', value)}
          onEmailChange={(value) => form.handleFieldChange('email', value)}
          onLinkedInChange={(value) =>
            form.handleFieldChange('linkedIn', value)
          }
          onGitHubGitlabUrlChange={(value) =>
            form.handleFieldChange('githubGitlabUrl', value)
          }
          onNewsletterOptInChange={(checked) =>
            form.handleFieldChange('newsletterOptIn', String(checked))
          }
        />
      )
    },
    [STEP_IDS.STEP_2]: () => {
      const skillAreas = JSON.parse(form.formData.skillAreas || '[]')
      const technicalSkills = JSON.parse(form.formData.technicalSkills || '[]')
      return (
        <div className={cn('space-y-6')}>
          <SkillAreasSection
            selectedSkillAreas={skillAreas}
            skillAreas={strings.waitlistForms.skillAreas}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onSkillAreaChange={(skillId, checked) => {
              const updated = checked
                ? [...skillAreas, skillId]
                : skillAreas.filter((id: string) => id !== skillId)
              form.handleFieldChange('skillAreas', JSON.stringify(updated))
            }}
            label={strings.waitlistForms.fields.skillAreas.label}
          />
          <TechnicalSkillsSection
            placeholder={
              strings.waitlistForms.fields.technicalSkills.placeholder
            }
            label={strings.waitlistForms.fields.technicalSkills.label}
            selectedSkills={technicalSkills}
            technicalSkills={strings.waitlistForms.technicalSkills}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onSkillsChange={(skills) => {
              form.handleFieldChange(
                'technicalSkills',
                JSON.stringify(Array.from(skills))
              )
            }}
          />
        </div>
      )
    },
    [STEP_IDS.STEP_3]: () => (
      <CandidateProfileStep
        professionalStatus={form.formData.professionalStatus}
        techCommunityMembership={form.formData.techCommunityMembership}
        techCommunityDetails={form.formData.techCommunityDetails || ''}
        githubGitlabUrl={form.formData.githubGitlabUrl}
        errors={form.errors}
        isSubmitting={form.isSubmitting}
        onProfessionalStatusChange={(value) =>
          form.handleFieldChange('professionalStatus', value)
        }
        onTechCommunityMembershipChange={(value) =>
          form.handleFieldChange('techCommunityMembership', value)
        }
        onTechCommunityDetailsChange={(value) =>
          form.handleFieldChange('techCommunityDetails', value)
        }
        onGithubGitlabUrlChange={(value) =>
          form.handleFieldChange('githubGitlabUrl', value)
        }
      />
    ),
    [STEP_IDS.STEP_4]: () => {
      const fields: FormFieldConfig[] = [
        {
          id: 'skillValidationConfidence',
          type: 'radio',
          label: strings.waitlistForms.labels.skillValidationConfidence,
          options: skillValidationOptions as unknown as Array<{
            value: string
            label: string
          }>,
          value: form.formData.skillValidationConfidence,
          onChange: (value) =>
            form.handleFieldChange(
              'skillValidationConfidence',
              value as string
            ),
          error: form.errors.skillValidationConfidence,
        },
        {
          id: 'jobSearchChallenges',
          type: 'checkbox',
          label: strings.waitlistForms.labels.jobSearchChallenges,
          options: jobSearchChallengeOptions as unknown as Array<{
            value: string
            label: string
          }>,
          value: form.formData.jobSearchChallenges,
          onChange: (values) =>
            form.handleFieldChange(
              'jobSearchChallenges',
              JSON.stringify(values)
            ),
          error: form.errors.jobSearchChallenges,
          otherFieldId: 'jobSearchChallengeOther',
          otherValue: form.formData.jobSearchChallengeOther,
          onOtherChange: (value) =>
            form.handleFieldChange('jobSearchChallengeOther', value),
          otherError: form.errors.jobSearchChallengeOther,
        },
        {
          id: 'valuableOutcomes',
          type: 'checkbox',
          label: strings.waitlistForms.labels.valuableOutcomes,
          options: valuableOutcomeOptions as unknown as Array<{
            value: string
            label: string
          }>,
          value: form.formData.valuableOutcomes,
          onChange: (values) =>
            form.handleFieldChange('valuableOutcomes', JSON.stringify(values)),
          error: form.errors.valuableOutcomes,
          otherFieldId: 'valuableOutcomeOther',
          otherValue: form.formData.valuableOutcomeOther,
          onOtherChange: (value) =>
            form.handleFieldChange('valuableOutcomeOther', value),
          otherError: form.errors.valuableOutcomeOther,
        },
      ]
      return (
        <div className={cn('space-y-6')}>
          <FormFieldsStep fields={fields} isSubmitting={form.isSubmitting} />
        </div>
      )
    },
  }

  const renderStep = () => {
    const renderer = stepRenderers[context.currentStep]
    return renderer ? renderer() : null
  }

  const isCurrentStepValid = validateCandidateStep(
    context.currentStep,
    form.formData
  ).isValid

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='candidate' />
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
