'use client'

import { ContactConsentSection } from '@/components/molecules/ContactConsentSection'
import { FormFieldsStep } from '@/components/molecules/FormFieldsStep'
import { SkillAreasSection } from '@/components/molecules/SkillAreasSection'
import { TechnicalSkillsSection } from '@/components/molecules/TechnicalSkillsSection'
import { VerifierProfileStep } from '@/components/molecules/VerifierProfileStep'
import { WaitlistFormWrapper } from '@/components/organisms/WaitlistFormWrapper'
import { useVerifierFormContext } from '@/context/VerifierFormContext'
import { useVerifierForm } from '@/hooks/useVerifierForm'
import {
  PROFESSIONAL_FRUSTRATION_OPTIONS,
  SKILL_AREAS,
  TECHNICAL_SKILLS,
  TOTAL_FORM_STEPS,
  VERIFIER_MOTIVATION_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import { validateVerifierStep } from '@/lib/waitlistFormValidators'
import { cn } from '@/lib/utils'

import type { FormFieldConfig } from '@/types/FormFieldsStep.types'

export function VerifierWaitlistForm() {
  const context = useVerifierFormContext()
  const form = useVerifierForm({
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
            linkedIn={form.formData.linkedIn}
            github={form.formData.github}
            newsletterOptIn={form.formData.newsletterOptIn}
            includeLinkedIn={true}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onEmailChange={(value) => form.handleFieldChange('email', value)}
            onLinkedInChange={(value) =>
              form.handleFieldChange('linkedIn', value)
            }
            onGitHubChange={(value) => form.handleFieldChange('github', value)}
            onNewsletterOptInChange={(checked) =>
              form.handleFieldChange('newsletterOptIn', String(checked))
            }
          />
        )
      case 2: {
        const skillAreas = JSON.parse(form.formData.skillAreas || '[]')
        const technicalSkills = JSON.parse(
          form.formData.technicalSkills || '[]'
        )
        return (
          <div className={cn('space-y-6')}>
            <SkillAreasSection
              selectedSkillAreas={skillAreas}
              skillAreas={SKILL_AREAS}
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
              selectedSkills={technicalSkills}
              technicalSkills={TECHNICAL_SKILLS}
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
      }
      case 3:
        return (
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
        )
      case 4: {
        const fields: FormFieldConfig[] = [
          {
            id: 'verifierMotivations',
            type: 'checkbox',
            label: strings.waitlistForms.labels.verifierMotivations,
            options: VERIFIER_MOTIVATION_OPTIONS,
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
            type: 'radio',
            label: strings.waitlistForms.labels.professionalFrustration,
            options: PROFESSIONAL_FRUSTRATION_OPTIONS,
            value: form.formData.professionalFrustration,
            onChange: (value) =>
              form.handleFieldChange(
                'professionalFrustration',
                value as string
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
          <FormFieldsStep fields={fields} isSubmitting={form.isSubmitting} />
        )
      }
      default:
        return null
    }
  }

  const isCurrentStepValid = validateVerifierStep(
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
