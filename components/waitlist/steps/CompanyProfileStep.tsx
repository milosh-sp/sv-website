'use client'

import { Building2, Globe, Users } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface CompanySize {
  id: string
  label: string
}

interface CompanyProfileStepProps extends HTMLAttributes<HTMLDivElement> {
  companyName: string
  companySize: string
  industry: string
  companyWebsite: string
  companySizes: CompanySize[]
  industries: string[]
  errors: Record<string, string>
  isSubmitting: boolean
  onCompanyNameChange: (value: string) => void
  onCompanySizeChange: (value: string) => void
  onIndustryChange: (value: string) => void
  onCompanyWebsiteChange: (value: string) => void
}

export function CompanyProfileStep({
  companyName,
  companySize,
  industry,
  companyWebsite,
  companySizes,
  industries,
  errors,
  isSubmitting,
  onCompanyNameChange,
  onCompanySizeChange,
  onIndustryChange,
  onCompanyWebsiteChange,
  className,
  ...props
}: CompanyProfileStepProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <FormField
        id='companyName'
        type='text'
        placeholder='e.g., Tech Company Inc.'
        value={companyName}
        onChange={(e) => onCompanyNameChange(e.target.value)}
        error={errors.companyName}
        disabled={isSubmitting}
        icon={<Building2 className='w-5 h-5' />}
        label='Company Name'
        ariaDescribedBy='companyName-error'
      />

      <div className='space-y-2'>
        <label htmlFor='companySize' className='flex items-center gap-2'>
          <Users className='w-5 h-5 text-slate-400' />
          <span className='sr-only'>Company Size</span>
        </label>
        <select
          id='companySize'
          value={companySize}
          onChange={(e) => onCompanySizeChange(e.target.value)}
          disabled={isSubmitting}
          className='w-full h-12 px-3 border border-slate-300 rounded-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50'
          aria-describedby='companySize-error'
        >
          <option value=''>Select company size</option>
          {companySizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.label}
            </option>
          ))}
        </select>
        {errors.companySize && (
          <p className='text-destructive text-sm'>{errors.companySize}</p>
        )}
      </div>

      <div className='space-y-2'>
        <label htmlFor='industry' className='sr-only'>
          Industry
        </label>
        <select
          id='industry'
          value={industry}
          onChange={(e) => onIndustryChange(e.target.value)}
          disabled={isSubmitting}
          className='w-full h-12 px-3 border border-slate-300 rounded-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50'
          aria-describedby='industry-error'
        >
          <option value=''>Select industry</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
        {errors.industry && (
          <p className='text-destructive text-sm'>{errors.industry}</p>
        )}
      </div>

      <FormField
        id='companyWebsite'
        type='url'
        placeholder='https://yourcompany.com (optional)'
        value={companyWebsite}
        onChange={(e) => onCompanyWebsiteChange(e.target.value)}
        error={errors.companyWebsite}
        disabled={isSubmitting}
        icon={<Globe className='w-5 h-5' />}
        label='Company Website'
        ariaDescribedBy='companyWebsite-error'
      />
    </div>
  )
}
