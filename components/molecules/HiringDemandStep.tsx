'use client'

import { AlertCircle, Target } from 'lucide-react'
import { SkillAreasSection } from '@/components/molecules/SkillAreasSection'
import { TextAreaField } from '@/components/molecules/TextAreaField'
import { cn } from '@/lib/utils'
import type { HiringDemandStepProps } from '@/types/HiringDemandStep.types'

export function HiringDemandStep({
  hiringDemand,
  skillsNeeded,
  challenges,
  skillAreas,
  errors,
  isSubmitting,
  onHiringDemandChange,
  onSkillsNeededChange,
  onChallengesChange,
  className,
  ...props
}: HiringDemandStepProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <TextAreaField
        id='hiringDemand'
        placeholder='Describe your hiring needs and requirements...'
        value={hiringDemand}
        onChange={(e) => onHiringDemandChange(e.target.value)}
        error={errors.hiringDemand}
        disabled={isSubmitting}
        icon={<Target className='w-5 h-5' />}
        label='Hiring Demand'
        ariaDescribedBy='hiringDemand-error'
        rows={4}
      />

      <div>
        <h3 className='text-sm font-medium mb-3'>Skills Needed</h3>
        <SkillAreasSection
          selectedSkillAreas={skillsNeeded}
          skillAreas={skillAreas}
          errors={errors}
          isSubmitting={isSubmitting}
          onSkillAreaChange={onSkillsNeededChange}
        />
      </div>

      <TextAreaField
        id='challenges'
        placeholder='What challenges are you facing in hiring?'
        value={challenges}
        onChange={(e) => onChallengesChange(e.target.value)}
        error={errors.challenges}
        disabled={isSubmitting}
        icon={<AlertCircle className='w-5 h-5' />}
        label='Challenges'
        ariaDescribedBy='challenges-error'
        rows={4}
      />
    </div>
  )
}
