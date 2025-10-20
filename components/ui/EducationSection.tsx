import { strings } from '@/lib/strings'
import type { EducationItem } from '@/types/CVPreview.types'
import { GraduationCap } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerificationBadge } from './VerificationBadge'

/**
 * Education Section Component
 * Single Responsibility: Displays education history
 */
export function EducationSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.education}
        icon={GraduationCap}
      >
        <div className='space-y-4'>
          {strings.cvSampleData.education.map(
            (edu: EducationItem, index: number) => (
              <div
                key={`education-${edu.degree}-${index}`}
                className='relative'
              >
                <div className='flex justify-between items-start mb-1'>
                  <span className='font-medium text-sm'>{edu.degree}</span>
                  <span className='text-xs text-gray-500'>{edu.year}</span>
                </div>
                <div className='text-slate-800 text-sm mb-2'>
                  {edu.institution}
                </div>
                <VerificationBadge
                  verified={edu.verified}
                  className='absolute top-0 right-0'
                />
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}
