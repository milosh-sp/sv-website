import { strings } from '@/lib/strings'
import { GraduationCap } from 'lucide-react'
import { SectionList } from './SectionList'
import type { EducationSectionItem } from '@/types/CVPreview.types'

/**
 * Education Section Component
 * Single Responsibility: Displays education history
 */
export function EducationSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.education}
      icon={GraduationCap}
      items={strings.cvSampleData.education}
      itemRenderer={(edu: EducationSectionItem) => (
        <div>
          <div className='flex justify-between items-start mb-1'>
            <span className='font-medium text-sm'>{edu.degree}</span>
            <span className='text-xs text-gray-500'>{edu.year}</span>
          </div>
          <div className='text-slate-800 text-sm mb-2'>{edu.institution}</div>
        </div>
      )}
    />
  )
}
