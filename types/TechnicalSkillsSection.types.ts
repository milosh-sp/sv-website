import type { FieldsetHTMLAttributes } from 'react'

interface TechnicalSkill {
  id: string
  label: string
}

interface TechnicalSkillsSectionProps
  extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  selectedSkills: string[]
  technicalSkills: TechnicalSkill[]
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillsChange: (skills: readonly string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  label?: string
  description?: string
}

export type { TechnicalSkill, TechnicalSkillsSectionProps }
