'use client'

import { useCandidateFormContext } from '@/contexts/CandidateFormContext'
import { useCandidateForm } from '@/hooks/useCandidateForm'
import { validateCandidateStep } from '@/lib/waitlistFormValidators'
import {
  SKILL_AREAS,
  TECHNICAL_SKILLS,
  TOTAL_FORM_STEPS,
  SKILL_VALIDATION_OPTIONS,
  JOB_SEARCH_CHALLENGE_OPTIONS,
  VALUABLE_OUTCOME_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import { ContactConsentSection } from '@/components/waitlist/molecules/ContactConsentSection'
import { SkillAreasSection } from '@/components/waitlist/molecules/SkillAreasSection'
import { TechnicalSkillsSection } from '@/components/waitlist/molecules/TechnicalSkillsSection'
import { CandidateProfileStep } from '@/components/waitlist/molecules/CandidateProfileStep'
import { FormFieldsStep } from '@/components/waitlist/molecules/FormFieldsStep'
import { WaitlistFormWrapper } from '@/components/waitlist/organisms/WaitlistFormWrapper'
import { cn } from '@/lib/utils'
import type { FormFieldConfig } from '@/types/FormFieldsStep.types'

export function CandidateWaitlistForm() {
  const context = useCandidateFormContext()
  const form = useCandidateForm({
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
        )
      case 4: {
        const fields: FormFieldConfig[] = [
          {
            id: 'skillValidationConfidence',
            type: 'radio',
            label: strings.waitlistForms.labels.skillValidationConfidence,
            options: SKILL_VALIDATION_OPTIONS,
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
            options: JOB_SEARCH_CHALLENGE_OPTIONS,
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
            options: VALUABLE_OUTCOME_OPTIONS,
            value: form.formData.valuableOutcomes,
            onChange: (values) =>
              form.handleFieldChange(
                'valuableOutcomes',
                JSON.stringify(values)
              ),
            error: form.errors.valuableOutcomes,
            otherFieldId: 'valuableOutcomeOther',
            otherValue: form.formData.valuableOutcomeOther,
            onOtherChange: (value) =>
              form.handleFieldChange('valuableOutcomeOther', value),
            otherError: form.errors.valuableOutcomeOther,
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

  const isCurrentStepValid = validateCandidateStep(
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
