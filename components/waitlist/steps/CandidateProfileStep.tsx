'use client'

import type { HTMLAttributes } from 'react'
import { Code2, Users } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { RadioButton } from '@/components/ui/RadioButton'
import { cn } from '@/lib/utils'

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

const PROFESSIONAL_STATUS_OPTIONS = [
  { value: 'student', label: 'Student' },
  { value: 'unemployed', label: 'Unemployed' },
  { value: 'employed-fulltime', label: 'Employed (full-time)' },
  { value: 'employed-parttime', label: 'Employed (part-time)' },
  { value: 'freelancer', label: 'Freelancer' },
]

const TECH_COMMUNITY_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'yes', label: 'Yes, specify:' },
  { value: 'no', label: 'No' },
]

export function CandidateProfileStep({
  professionalStatus,
  techCommunityMembership,
  techCommunityDetails,
  githubGitlabUrl,
  errors,
  isSubmitting,
  onProfessionalStatusChange,
  onTechCommunityMembershipChange,
  onTechCommunityDetailsChange,
  onGithubGitlabUrlChange,
  className,
  ...props
}: CandidateProfileStepProps) {
  return (
    <div className={cn('space-y-6', className)} {...props}>
      {/* Professional Status */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          What is your current professional status?
        </h3>
        <div className='space-y-2'>
          {PROFESSIONAL_STATUS_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`professional-status-${option.value}`}
              name='professionalStatus'
              value={option.value}
              label={option.label}
              checked={professionalStatus === option.value}
              onChange={(e) => onProfessionalStatusChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.professionalStatus
                  ? 'professionalStatus-error'
                  : undefined
              }
            />
          ))}
        </div>
        {errors.professionalStatus && (
          <p
            id='professionalStatus-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>{errors.professionalStatus}</span>
          </p>
        )}
      </div>

      {/* Tech Community Membership */}
      <div className='space-y-3'>
        <h3 className='text-sm font-medium'>
          Are you already a member of a tech community?
        </h3>
        <div className='space-y-2'>
          {TECH_COMMUNITY_OPTIONS.map((option) => (
            <RadioButton
              key={option.value}
              id={`tech-community-${option.value}`}
              name='techCommunityMembership'
              value={option.value}
              label={option.label}
              checked={techCommunityMembership === option.value}
              onChange={(e) => onTechCommunityMembershipChange(e.target.value)}
              disabled={isSubmitting}
              aria-describedby={
                errors.techCommunityMembership
                  ? 'techCommunityMembership-error'
                  : undefined
              }
            />
          ))}
        </div>
        {errors.techCommunityMembership && (
          <p
            id='techCommunityMembership-error'
            className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
            role='alert'
            aria-live='polite'
          >
            <span
              className='text-destructive font-medium text-xs mt-0.5'
              aria-hidden='true'
            >
              ⚠
            </span>
            <span className='leading-relaxed'>
              {errors.techCommunityMembership}
            </span>
          </p>
        )}
      </div>

      {/* Tech Community Details - Show only if "Yes" is selected */}
      {techCommunityMembership === 'yes' && (
        <FormField
          id='techCommunityDetails'
          type='text'
          placeholder='e.g., Python Developers Group, React Community'
          value={techCommunityDetails}
          onChange={(e) => onTechCommunityDetailsChange(e.target.value)}
          error={errors.techCommunityDetails}
          disabled={isSubmitting}
          icon={<Users className='w-5 h-5' />}
          label='Tech Community Details'
          ariaDescribedBy='techCommunityDetails-error'
        />
      )}

      {/* GitHub/GitLab URL */}
      <FormField
        id='githubGitlabUrl'
        type='text'
        placeholder='https://github.com/yourprofile or https://gitlab.com/yourprofile'
        value={githubGitlabUrl}
        onChange={(e) => onGithubGitlabUrlChange(e.target.value)}
        error={errors.githubGitlabUrl}
        disabled={isSubmitting}
        icon={<Code2 className='w-5 h-5' />}
        label='Please provide your Github/Gitlab profile URL'
        ariaDescribedBy='githubGitlabUrl-error'
      />
    </div>
  )
}
