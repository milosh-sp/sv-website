'use client'

import { Briefcase, Building2, Calendar, CheckCircle } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { TextAreaField } from '@/components/ui/TextAreaField'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface VerifierProfileStepProps extends HTMLAttributes<HTMLDivElement> {
  yearsOfExperience: string
  currentRole: string
  currentCompany: string
  verificationExperience: string
  errors: Record<string, string>
  isSubmitting: boolean
  onYearsOfExperienceChange: (value: string) => void
  onCurrentRoleChange: (value: string) => void
  onCurrentCompanyChange: (value: string) => void
  onVerificationExperienceChange: (value: string) => void
}

export function VerifierProfileStep({
  yearsOfExperience,
  currentRole,
  currentCompany,
  verificationExperience,
  errors,
  isSubmitting,
  onYearsOfExperienceChange,
  onCurrentRoleChange,
  onCurrentCompanyChange,
  onVerificationExperienceChange,
  className,
  ...props
}: VerifierProfileStepProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <FormField
        id='yearsOfExperience'
        type='text'
        placeholder='e.g., 10 years'
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
        placeholder='e.g., Tech Lead'
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

      <TextAreaField
        id='verificationExperience'
        placeholder='Tell us about your experience verifying skills...'
        value={verificationExperience}
        onChange={(e) => onVerificationExperienceChange(e.target.value)}
        error={errors.verificationExperience}
        disabled={isSubmitting}
        icon={<CheckCircle className='w-5 h-5' />}
        label='Verification Experience'
        ariaDescribedBy='verificationExperience-error'
        rows={4}
      />
    </div>
  )
}
