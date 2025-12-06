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

export type { CompanyProfileStepProps }
