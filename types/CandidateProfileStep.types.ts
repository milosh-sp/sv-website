import type { HTMLAttributes } from 'react'

interface CandidateProfileStepProps extends HTMLAttributes<HTMLDivElement> {
  professionalStatus: string
  techCommunityMembership: string
  techCommunityDetails: string
  githubGitlabUrl: string
  errors: Record<string, string>
  isSubmitting: boolean
  onProfessionalStatusChange: (value: string) => void
  onTechCommunityMembershipChange: (value: string) => void
  onTechCommunityDetailsChange: (value: string) => void
  onGithubGitlabUrlChange: (value: string) => void
}

export type { CandidateProfileStepProps }

