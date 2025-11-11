import type { HTMLAttributes } from 'react'

interface TechnicalSkill {
  id: string
  label: string
}

interface TechnicalSkillsSectionProps extends HTMLAttributes<HTMLDivElement> {
  selectedSkills: string[]
  technicalSkills: TechnicalSkill[]
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillsChange: (skills: readonly string[]) => void
}

export type { TechnicalSkill, TechnicalSkillsSectionProps }
