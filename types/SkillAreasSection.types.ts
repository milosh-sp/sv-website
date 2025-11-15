import type { ComponentProps } from 'react'

interface SkillArea {
  id: string
  label: string
  description?: string
}

interface SkillAreasSectionProps extends ComponentProps<'fieldset'> {
  selectedSkillAreas: string[]
  skillAreas: SkillArea[]
  errors: Record<string, string>
  isSubmitting: boolean
  onSkillAreaChange: (skillAreaId: string, checked: boolean) => void
  label?: string
}

export type { SkillArea, SkillAreasSectionProps }
