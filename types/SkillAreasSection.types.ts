import type { HTMLAttributes } from 'react'

interface SkillArea {
  id: string
  label: string
  description?: string
}

interface SkillAreasSectionProps extends HTMLAttributes<HTMLDivElement> {
  selectedSkillAreas: string[]
  skillAreas: SkillArea[]
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillAreaChange: (skillAreaId: string, checked: boolean) => void
}

export type { SkillArea, SkillAreasSectionProps }

