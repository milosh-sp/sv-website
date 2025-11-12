'use client'

import { Checkbox } from '@/components/atoms/Checkbox'
import { FieldError } from '@/components/atoms/FieldError'
import { cn } from '@/lib/utils'

import type { SkillAreasSectionProps } from '@/types/SkillAreasSection.types'

export function SkillAreasSection({
  selectedSkillAreas,
  skillAreas,
  errors,
  isSubmitting,
  onSkillAreaChange,
  className,
  ...props
}: SkillAreasSectionProps) {
  return (
    <fieldset className={cn('space-y-4', className)} {...props}>
      <div className={cn('space-y-3')}>
        {skillAreas.map((skillArea) => (
          <Checkbox
            key={skillArea.id}
            id={`skill-area-${skillArea.id}`}
            label={skillArea.label}
            description={skillArea.description}
            checked={selectedSkillAreas.includes(skillArea.id)}
            onChange={(e) => onSkillAreaChange(skillArea.id, e.target.checked)}
            disabled={isSubmitting}
          />
        ))}
      </div>

      <FieldError error={errors.skillAreas} id='skillAreas-error' />
    </fieldset>
  )
}
