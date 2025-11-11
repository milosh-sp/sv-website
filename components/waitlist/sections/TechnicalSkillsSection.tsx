'use client'

import { MultiSelectDropdown } from '@/components/ui/MultiSelectDropdown'
import { FieldError } from '../../ui/FieldError'
import { cn } from '@/lib/utils'

import type { TechnicalSkillsSectionProps } from '@/types/TechnicalSkillsSection.types'

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
    <fieldset className={cn('space-y-4', className)} {...props}>
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

      <FieldError error={errors.technicalSkills} id='technicalSkills-error' />
    </fieldset>
  )
}
