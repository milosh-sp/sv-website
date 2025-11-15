import type { HTMLAttributes } from 'react'
import type { SkillArea } from './SkillAreasSection.types'

interface HiringDemandStepProps extends HTMLAttributes<HTMLDivElement> {
  hiringDemand: string
  skillsNeeded: string[]
  challenges: string
  skillAreas: SkillArea[]
  errors: Record<string, string>
  isSubmitting: boolean
  onHiringDemandChange: (value: string) => void
  onSkillsNeededChange: (skillId: string, checked: boolean) => void
  onChallengesChange: (value: string) => void
}

export type { HiringDemandStepProps }
