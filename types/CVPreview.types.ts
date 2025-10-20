import type { LucideIcon } from 'lucide-react'

/**
 * Type definitions for CV data structures
 */
interface VerificationStatus {
  verified: boolean | 'pending'
  verifier?: string
}

interface SkillItem extends VerificationStatus {
  name: string
}

interface EducationItem extends VerificationStatus {
  degree: string
  institution: string
  year: string
}

interface ExperienceItem extends VerificationStatus {
  title: string
  company: string
  period: string
  description: string
}

interface ProjectItem extends VerificationStatus {
  name: string
  description: string
}

interface CertificationItem {
  name: string
  verifier: string
}

interface LanguageItem {
  name: string
  level: string
  verified: boolean | 'pending'
  verifier?: string
}

interface CVSectionProps {
  title: string
  icon: LucideIcon
  children?: React.ReactNode
  className?: string
}

interface VerificationBadgeProps {
  verified: boolean | 'pending'
  className?: string
}

interface VerifierTooltipProps {
  verifier: string
}

export type {
  VerificationStatus,
  SkillItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  CertificationItem,
  LanguageItem,
  CVSectionProps,
  VerificationBadgeProps,
  VerifierTooltipProps,
}
