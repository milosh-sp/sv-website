'use client'

import { Building2, Globe, Users } from 'lucide-react'
import { FormField } from '@/components/ui/FormField'
import { SearchableDropdown } from '@/components/ui/SearchableDropdown'
import { cn } from '@/lib/utils'
import type { CompanyProfileStepProps } from '@/types/CompanyProfileStep.types'
import type { DropdownOption } from '@/types/SearchableDropdown.types'

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
  // Convert companySizes to dropdown options
  const companySizeOptions: DropdownOption<string>[] = companySizes.map(
    (size) => ({
      value: size.id,
      label: size.label,
    })
  )

  // Convert industries to dropdown options
  const industryOptions: DropdownOption<string>[] = industries.map((ind) => ({
    value: ind,
    label: ind,
  }))

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
        icon={<Building2 className={cn('w-5 h-5')} />}
        label='Company Name'
        ariaDescribedBy='companyName-error'
      />

      <div className={cn('space-y-2')}>
        <label htmlFor='companySize' className={cn('flex items-center gap-2')}>
          <Users className={cn('w-5 h-5 text-slate-400')} />
          <span className={cn('text-sm font-medium text-slate-700')}>
            Company Size
          </span>
        </label>
        <SearchableDropdown<string>
          id='companySize'
          options={companySizeOptions}
          value={companySize || null}
          onChange={(value) => onCompanySizeChange(value ?? '')}
          placeholder='Select company size'
          disabled={isSubmitting}
          error={errors.companySize}
          aria-describedby='companySize-error'
        />
      </div>

      <div className={cn('space-y-2')}>
        <label htmlFor='industry' className={cn('flex items-center gap-2')}>
          <span className={cn('text-sm font-medium text-slate-700')}>
            Industry
          </span>
        </label>
        <SearchableDropdown<string>
          id='industry'
          options={industryOptions}
          value={industry || null}
          onChange={(value) => onIndustryChange(value ?? '')}
          placeholder='Select industry'
          disabled={isSubmitting}
          error={errors.industry}
          aria-describedby='industry-error'
        />
      </div>

      <FormField
        id='companyWebsite'
        type='url'
        placeholder='https://yourcompany.com (optional)'
        value={companyWebsite}
        onChange={(e) => onCompanyWebsiteChange(e.target.value)}
        error={errors.companyWebsite}
        disabled={isSubmitting}
        icon={<Globe className={cn('w-5 h-5')} />}
        label='Company Website'
        ariaDescribedBy='companyWebsite-error'
      />
    </div>
  )
}
