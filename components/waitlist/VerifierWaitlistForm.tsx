'use client'

import { useVerifierFormContext } from '@/contexts/VerifierFormContext'
import { useVerifierForm } from '@/hooks/useVerifierForm'
import { validateVerifierStep } from '@/lib/WaitlistValidation'
import {
  SKILL_AREAS,
  TECHNICAL_SKILLS,
  TOTAL_FORM_STEPS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings' // Used for form labels and button text
import { cn } from '@/lib/utils'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { SkillAreasSection } from './sections/SkillAreasSection'
import { TechnicalSkillsSection } from './sections/TechnicalSkillsSection'
import { VerifierProfileStep } from './steps/VerifierProfileStep'
import { VerifierMotivationStep } from './steps/VerifierMotivationStep'
import { ProgressIndicator } from './ui/ProgressIndicator'
import { FormNavigation } from './ui/FormNavigation'
import { HoneypotField } from '@/components/ui/HoneypotField'
import { StatusMessage } from '@/components/ui/StatusMessage'

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
      case 4:
        return (
          <VerifierMotivationStep
            verifierMotivations={form.formData.verifierMotivations}
            verifierMotivationOther={form.formData.verifierMotivationOther}
            professionalFrustration={form.formData.professionalFrustration}
            professionalFrustrationOther={
              form.formData.professionalFrustrationOther
            }
            errors={form.errors}
            isSubmitting={form.isSubmitting}
            onVerifierMotivationsChange={(values) =>
              form.handleFieldChange(
                'verifierMotivations',
                JSON.stringify(values)
              )
            }
            onVerifierMotivationOtherChange={(value) =>
              form.handleFieldChange('verifierMotivationOther', value)
            }
            onProfessionalFrustrationChange={(value) =>
              form.handleFieldChange('professionalFrustration', value)
            }
            onProfessionalFrustrationOtherChange={(value) =>
              form.handleFieldChange('professionalFrustrationOther', value)
            }
          />
        )
      default:
        return null
    }
  }

  const isCurrentStepValid = validateVerifierStep(
    context.currentStep,
    form.formData
  ).isValid

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-6 w-full max-w-2xl mx-auto')}
      noValidate
    >
      <ProgressIndicator
        currentStep={context.currentStep}
        totalSteps={TOTAL_FORM_STEPS}
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
        placeholder={strings.waitlistForms.fields.website.placeholder}
        value={form.honeypotValue}
        onChange={(e) => form.handleHoneypotChange(e.target.value)}
        label={strings.waitlistForms.fields.website.label}
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
        totalSteps={TOTAL_FORM_STEPS}
        isSubmitting={form.isSubmitting}
        canProceed={isCurrentStepValid}
        onPrevious={() => context.previousStep()}
        onNext={() => context.nextStep()}
        submitAriaLabel={strings.waitlistForms.accessibility.submitButton}
        submitLabel={strings.waitlistForms.buttons.submit}
        submitLoadingLabel={strings.waitlistForms.buttons.submitting}
      />
    </form>
  )
}
