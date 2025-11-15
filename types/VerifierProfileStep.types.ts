import type { HTMLAttributes } from 'react'

interface VerifierProfileStepProps extends HTMLAttributes<HTMLDivElement> {
  yearsOfExperience: string
  hoursPerWeek: string
  professionalStatus: string
  coachingMentoring: string
  githubGitlabUrl: string
  errors: Record<string, string>
  isSubmitting: boolean
  onYearsOfExperienceChange: (value: string) => void
  onHoursPerWeekChange: (value: string) => void
  onProfessionalStatusChange: (value: string) => void
  onCoachingMentoringChange: (value: string) => void
  onGithubGitlabUrlChange: (value: string) => void
}

export type { VerifierProfileStepProps }
