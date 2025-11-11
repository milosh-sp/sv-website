'use client'

import { Briefcase, Building2, Calendar } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CandidateProfileStepProps extends HTMLAttributes<HTMLDivElement> {
  yearsOfExperience: string
  currentRole: string
  currentCompany: string
  errors: Record<string, string>
  isSubmitting: boolean
  onYearsOfExperienceChange: (value: string) => void
  onCurrentRoleChange: (value: string) => void
  onCurrentCompanyChange: (value: string) => void
}

export function CandidateProfileStep({
  yearsOfExperience,
  currentRole,
  currentCompany,
  errors,
  isSubmitting,
  onYearsOfExperienceChange,
  onCurrentRoleChange,
  onCurrentCompanyChange,
  className,
  ...props
}: CandidateProfileStepProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <FormField
        id='yearsOfExperience'
        type='text'
        placeholder='e.g., 5 years'
        value={yearsOfExperience}
        onChange={(e) => onYearsOfExperienceChange(e.target.value)}
        error={errors.yearsOfExperience}
        disabled={isSubmitting}
        icon={<Calendar className='w-5 h-5' />}
        label='Years of Experience'
        ariaDescribedBy='yearsOfExperience-error'
      />

      <FormField
        id='currentRole'
        type='text'
        placeholder='e.g., Senior Software Engineer'
        value={currentRole}
        onChange={(e) => onCurrentRoleChange(e.target.value)}
        error={errors.currentRole}
        disabled={isSubmitting}
        icon={<Briefcase className='w-5 h-5' />}
        label='Current Role'
        ariaDescribedBy='currentRole-error'
      />

      <FormField
        id='currentCompany'
        type='text'
        placeholder='e.g., Tech Company Inc.'
        value={currentCompany}
        onChange={(e) => onCurrentCompanyChange(e.target.value)}
        error={errors.currentCompany}
        disabled={isSubmitting}
        icon={<Building2 className='w-5 h-5' />}
        label='Current Company'
        ariaDescribedBy='currentCompany-error'
      />
    </div>
  )
}
