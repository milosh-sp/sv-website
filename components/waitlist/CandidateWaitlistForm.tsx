'use client'

import { useCandidateFormContext } from '@/contexts/CandidateFormContext'
import { useCandidateForm } from '@/hooks/useCandidateForm'
import { validateCandidateStep } from '@/lib/WaitlistValidation'
import {
  SKILL_AREAS,
  TECHNICAL_SKILLS,
  TOTAL_FORM_STEPS,
} from '@/lib/waitlistConstants'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { SkillAreasSection } from './sections/SkillAreasSection'
import { TechnicalSkillsSection } from './sections/TechnicalSkillsSection'
import { CandidateProfileStep } from './steps/CandidateProfileStep'
import { MotivationChallengesStep } from './steps/MotivationChallengesStep'
import { WaitlistFormWrapper } from './WaitlistFormWrapper'
import { cn } from '@/lib/utils'

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
            privacyConsent={form.formData.privacyConsent}
            newsletterOptIn={form.formData.newsletterOptIn}
            includeLinkedIn={true}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onEmailChange={(value) => form.handleFieldChange('email', value)}
            onLinkedInChange={(value) =>
              form.handleFieldChange('linkedIn', value)
            }
            onGitHubChange={(value) => form.handleFieldChange('github', value)}
            onPrivacyConsentChange={(checked) =>
              context.updateFormData({ privacyConsent: String(checked) })
            }
            onNewsletterOptInChange={(checked) =>
              context.updateFormData({ newsletterOptIn: String(checked) })
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
      case 4:
        return (
          <MotivationChallengesStep
            skillValidationConfidence={form.formData.skillValidationConfidence}
            jobSearchChallenges={form.formData.jobSearchChallenges}
            jobSearchChallengeOther={form.formData.jobSearchChallengeOther}
            valuableOutcomes={form.formData.valuableOutcomes}
            valuableOutcomeOther={form.formData.valuableOutcomeOther}
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onSkillValidationConfidenceChange={(value) =>
              form.handleFieldChange('skillValidationConfidence', value)
            }
            onJobSearchChallengesChange={(values) =>
              form.handleFieldChange(
                'jobSearchChallenges',
                JSON.stringify(values)
              )
            }
            onJobSearchChallengeOtherChange={(value) =>
              form.handleFieldChange('jobSearchChallengeOther', value)
            }
            onValuableOutcomesChange={(values) =>
              form.handleFieldChange('valuableOutcomes', JSON.stringify(values))
            }
            onValuableOutcomeOtherChange={(value) =>
              form.handleFieldChange('valuableOutcomeOther', value)
            }
          />
        )
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
