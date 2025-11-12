'use client'

import { MultiSelectDropdown } from '@/components/molecules/MultiSelectDropdown'
import { FieldError } from '@/components/atoms/FieldError'
import { cn } from '@/lib/utils'

import type { TechnicalSkillsSectionProps } from '@/types/TechnicalSkillsSection.types'

export function TechnicalSkillsSection({
  selectedSkills,
  technicalSkills,
  errors,
  isSubmitting,
  onSkillsChange,
  placeholder,
  searchPlaceholder,
  label,
  description,
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
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        label={label}
        description={description}
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
