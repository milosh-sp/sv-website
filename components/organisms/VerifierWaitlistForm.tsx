'use client'

import { ContactConsentSection } from './ContactConsentSection'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { SkillAreasSection } from '@/components/molecules/SkillAreasSection'
import { TechnicalSkillsSection } from '@/components/molecules/TechnicalSkillsSection'
import { VerifierProfileStep } from '@/components/molecules/VerifierProfileStep'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useVerifierFormContext } from '@/context/VerifierFormContext'
import { useVerifierForm } from '@/hooks/useVerifierForm'
import { strings } from '@/lib/strings'
import { validateVerifierStep } from '@/lib/waitlistFormValidators'
import { cn } from '@/lib/utils'
import { STEP_IDS } from '@/lib/stepIdentifiers'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'
import type { ReactNode } from 'react'
import { SuccessScreen } from './SuccessScreen'
import { PageHeader } from '../molecules/PageHeader'
import { PageLayout } from '../templates/PageLayout'
import type { StepId } from '@/types/netlify.types'
import { HeroButtons } from '../molecules/HeroButtons'

const {
  professionalFrustrationOptions,
  totalFormSteps,
  verifierMotivationOptions,
  pageHeaders: {
    verifier: { title, description },
  },
} = strings.waitlistForms

export function VerifierWaitlistForm() {
  const context = useVerifierFormContext()
  const form = useVerifierForm({
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
            label={strings.waitlistForms.fields.skillAreas.label}
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
          />
          <TechnicalSkillsSection
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
      <VerifierProfileStep
        yearsOfExperience={form.formData.yearsOfExperience}
        hoursPerWeek={form.formData.hoursPerWeek}
        professionalStatus={form.formData.professionalStatus}
        coachingMentoring={form.formData.coachingMentoring}
        githubGitlabUrl={form.formData.githubGitlabUrl}
        errors={form.errors}
        isSubmitting={form.isSubmitting}
        onYearsOfExperienceChange={(value) =>
          form.handleFieldChange('yearsOfExperience', value)
        }
        onHoursPerWeekChange={(value) =>
          form.handleFieldChange('hoursPerWeek', value)
        }
        onProfessionalStatusChange={(value) =>
          form.handleFieldChange('professionalStatus', value)
        }
        onCoachingMentoringChange={(value) =>
          form.handleFieldChange('coachingMentoring', value)
        }
        onGithubGitlabUrlChange={(value) =>
          form.handleFieldChange('githubGitlabUrl', value)
        }
      />
    ),
    [STEP_IDS.STEP_4]: () => {
      const fields: FormFieldConfig[] = [
        {
          id: 'verifierMotivations',
          type: 'checkbox',
          label: strings.waitlistForms.labels.verifierMotivations,
          options: verifierMotivationOptions,
          value: form.formData.verifierMotivations,
          onChange: (values) =>
            form.handleFieldChange(
              'verifierMotivations',
              JSON.stringify(values)
            ),
          error: form.errors.verifierMotivations,
          otherFieldId: 'verifierMotivationOther',
          otherValue: form.formData.verifierMotivationOther,
          onOtherChange: (value) =>
            form.handleFieldChange('verifierMotivationOther', value),
          otherError: form.errors.verifierMotivationOther,
        },
        {
          id: 'professionalFrustration',
          type: 'checkbox',
          label: strings.waitlistForms.labels.professionalFrustration,
          options: professionalFrustrationOptions,
          value: form.formData.professionalFrustration,
          onChange: (values) =>
            form.handleFieldChange(
              'professionalFrustration',
              JSON.stringify(values)
            ),
          error: form.errors.professionalFrustration,
          otherFieldId: 'professionalFrustrationOther',
          otherValue: form.formData.professionalFrustrationOther,
          onOtherChange: (value) =>
            form.handleFieldChange('professionalFrustrationOther', value),
          otherError: form.errors.professionalFrustrationOther,
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

  const isCurrentStepValid = validateVerifierStep(
    context.currentStep,
    form.formData
  ).isValid

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='verifier' />
  }

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />

      <div className={cn('flex justify-center align-center')}>
        <HeroButtons showCandidate showHiringManager />
      </div>

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
