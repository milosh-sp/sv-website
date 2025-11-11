'use client'

import { Checkbox } from '@/components/ui/Checkbox'
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
    <div className={cn('space-y-4', className)} {...props}>
      <div className='space-y-3'>
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

      {errors.skillAreas && (
        <p
          className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
          role='alert'
          aria-live='polite'
        >
          <span
            className='text-destructive font-medium text-xs mt-0.5'
            aria-hidden='true'
          >
            ⚠
          </span>
          <span className='leading-relaxed'>{errors.skillAreas}</span>
        </p>
      )}
    </div>
  )
}
