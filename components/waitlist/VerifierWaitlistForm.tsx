'use client'

import { useVerifierFormContext } from '@/contexts/VerifierFormContext'
import { useVerifierForm } from '@/hooks/useVerifierForm'
import { validateVerifierStep } from '@/lib/WaitlistValidation'
import { ContactConsentSection } from './sections/ContactConsentSection'
import { SkillAreasSection } from './sections/SkillAreasSection'
import { TechnicalSkillsSection } from './sections/TechnicalSkillsSection'
import { VerifierProfileStep } from './steps/VerifierProfileStep'
import { VerifierMotivationStep } from './steps/VerifierMotivationStep'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { StatusMessage } from '@/components/ui/StatusMessage'
import { HoneypotField } from '@/components/ui/HoneypotField'

// Mock data - replace with actual data from lib/strings.ts
const SKILL_AREAS = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'fullstack', label: 'Full Stack Development' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data Science' },
]

const TECHNICAL_SKILLS = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'python', label: 'Python' },
  { id: 'aws', label: 'AWS' },
]

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
          <div className='space-y-6'>
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

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6 w-full max-w-2xl mx-auto'
      noValidate
    >
      {/* Progress indicator */}
      <div className='flex justify-between items-center mb-8 gap-2'>
        {[1, 2, 3, 4].map((step) => {
          const isCurrentStepValid = validateVerifierStep(
            context.currentStep,
            form.formData
          ).isValid
          const canClickStep = step <= context.currentStep && isCurrentStepValid
          return (
            <button
              key={step}
              type='button'
              onClick={() => {
                if (canClickStep) {
                  context.goToStep(step)
                }
              }}
              disabled={form.isSubmitting || !canClickStep}
              className={`flex-1 h-1 rounded-full transition-colors ${
                step <= context.currentStep ? 'bg-blue-600' : 'bg-gray-200'
              } ${
                canClickStep
                  ? 'cursor-pointer hover:opacity-80'
                  : 'cursor-not-allowed opacity-50'
              }`}
              aria-label={`Go to step ${step}`}
              aria-current={step === context.currentStep ? 'step' : undefined}
            />
          )
        })}
      </div>

      {/* Current step */}
      <div>{renderStep()}</div>

      {/* Honeypot field */}
      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder='https://example.com'
        value={form.honeypotValue}
        onChange={(e) => form.handleHoneypotChange(e.target.value)}
        label='Website'
      />

      {/* Status messages */}
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

      {/* Navigation buttons */}
      <div className='flex justify-between gap-4'>
        <button
          type='button'
          onClick={() => context.previousStep()}
          disabled={context.currentStep === 1 || form.isSubmitting}
          className='px-6 py-2 border border-gray-300 rounded-md disabled:opacity-50'
        >
          Previous
        </button>

        {context.currentStep < 4 ? (
          <button
            type='button'
            onClick={() => context.nextStep()}
            disabled={
              form.isSubmitting ||
              !validateVerifierStep(context.currentStep, form.formData).isValid
            }
            className='px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50'
          >
            Next
          </button>
        ) : (
          <SubmitButton
            isSubmitting={form.isSubmitting}
            isDisabled={form.isSubmitting}
            ariaLabel='Submit verifier form'
            idleText='Submit'
            loadingText='Submitting...'
          />
        )}
      </div>
    </form>
  )
}
