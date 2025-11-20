import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

type VerificationStatus = 'pending' | 'verified' | 'unverified'

type BaseSectionItem = {
  name?: string
  verified?: VerificationStatus
  verifier?: string
}

/**
 * Type definitions for CV data structures
 */
interface SkillItem extends BaseSectionItem {}

interface EducationItem extends BaseSectionItem {
  degree: string
  institution: string
  year: string
}

interface EducationSectionItem extends BaseSectionItem {
  degree: string
  institution: string
  period: string
}

interface ExperienceItem extends BaseSectionItem {
  title: string
  company: string
  period: string
  description: string
}

interface ProjectItem extends BaseSectionItem {
  description: string
}

interface CertificationItem extends BaseSectionItem {}

interface LanguageItem extends BaseSectionItem {
  level: string
}

interface CVSectionProps extends ComponentProps<'section'> {
  title: string
  icon: LucideIcon
  children?: React.ReactNode
  className?: string
}

interface VerificationBadgeProps {
  verified: VerificationStatus
  className?: string
}

interface VerifierTooltipProps extends ComponentProps<'aside'> {
  verifier: string
}

export type {
  SkillItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  LanguageItem,
  CVSectionProps,
  VerificationBadgeProps,
  VerifierTooltipProps,
  EducationSectionItem,
  BaseSectionItem,
  VerificationStatus,
}
