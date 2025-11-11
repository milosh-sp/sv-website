'use client'

import { MultiSelectDropdown } from '@/components/ui/MultiSelectDropdown'
import { cn } from '@/lib/utils'
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

export function TechnicalSkillsSection({
  selectedSkills,
  technicalSkills,
  errors,
  isSubmitting,
  onSkillsChange,
  className,
  ...props
}: TechnicalSkillsSectionProps) {
  const formattedSkills = technicalSkills.map((skill) => ({
    value: skill.id,
    label: skill.label,
  }))

  return (
    <div className={cn('space-y-4', className)} {...props}>
      <MultiSelectDropdown<string>
        options={formattedSkills}
        value={selectedSkills}
        onChange={onSkillsChange}
        placeholder='Select technical skills'
        searchPlaceholder='Search skills...'
        label='Technical Skills'
        description='Select the technical skills you have'
        disabled={isSubmitting}
        error={errors.technicalSkills}
        renderOption={(option) => option.label}
        filterFn={(option, query) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        }
      />

      {errors.technicalSkills && (
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
          <span className='leading-relaxed'>{errors.technicalSkills}</span>
        </p>
      )}
    </div>
  )
}
