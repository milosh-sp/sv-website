'use client'

import { Users } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { RadioButtonGroup } from '@/components/waitlist/ui/RadioButtonGroup'
import { ConditionalField } from '@/components/waitlist/ui/ConditionalField'
import { cn } from '@/lib/utils'
import type { CandidateProfileStepProps } from '@/types/CandidateProfileStep.types'

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
      <RadioButtonGroup
        name='professionalStatus'
        label='What is your current professional status?'
        options={PROFESSIONAL_STATUS_OPTIONS}
        value={professionalStatus}
        onChange={onProfessionalStatusChange}
        error={errors.professionalStatus}
        disabled={isSubmitting}
      />

      {/* Tech Community Membership */}
      <RadioButtonGroup
        name='techCommunityMembership'
        label='Are you already a member of a tech community?'
        options={TECH_COMMUNITY_OPTIONS}
        value={techCommunityMembership}
        onChange={onTechCommunityMembershipChange}
        error={errors.techCommunityMembership}
        disabled={isSubmitting}
      />

      {/* Tech Community Details - Conditional */}
      <ConditionalField condition={techCommunityMembership === 'yes'}>
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
      </ConditionalField>
    </div>
  )
}
