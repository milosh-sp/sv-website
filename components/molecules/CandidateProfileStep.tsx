'use client'

import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FormField } from '@/components/molecules/FormField'
import { RadioButtonGroup } from '@/components/molecules/RadioButtonGroup'
import { ConditionalField } from '@/components/molecules/ConditionalField'
import {
  PROFESSIONAL_STATUS_OPTIONS,
  TECH_COMMUNITY_OPTIONS,
} from '@/lib/waitlistConstants'
import { strings } from '@/lib/strings'
import type { CandidateProfileStepProps } from '@/types/CandidateProfileStep.types'

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
        label={strings.waitlistForms.labels.professionalStatus}
        options={PROFESSIONAL_STATUS_OPTIONS}
        value={professionalStatus}
        onChange={onProfessionalStatusChange}
        error={errors.professionalStatus}
        disabled={isSubmitting}
      />

      {/* Tech Community Membership */}
      <RadioButtonGroup
        name='techCommunityMembership'
        label={strings.waitlistForms.labels.techCommunityMembership}
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
          placeholder={
            strings.waitlistForms.fields.techCommunityDetails.placeholder
          }
          value={techCommunityDetails}
          onChange={(e) => onTechCommunityDetailsChange(e.target.value)}
          error={errors.techCommunityDetails}
          disabled={isSubmitting}
          icon={<Users className={cn('w-5 h-5')} />}
          label={strings.waitlistForms.fields.techCommunityDetails.label}
          ariaDescribedBy='techCommunityDetails-error'
        />
      </ConditionalField>
    </div>
  )
}
