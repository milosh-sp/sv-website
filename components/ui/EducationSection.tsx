import { strings } from '@/lib/strings'
import { GraduationCap } from 'lucide-react'
import { SectionList } from './SectionList'
import type { EducationSectionItem } from '@/types/CVPreview.types'

export function EducationSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.education}
      icon={GraduationCap}
      items={strings.cvSampleData.education}
      itemRenderer={(edu: EducationSectionItem) => (
        <article aria-label={`${edu.degree} at ${edu.institution}`}>
          <header className='flex justify-between items-start mb-1'>
            <h4 className='font-medium text-sm'>{edu.degree}</h4>
            <time className='text-xs text-gray-500' dateTime={edu.year}>
              {edu.year}
            </time>
          </header>
          <p className='text-slate-800 text-sm mb-2'>{edu.institution}</p>
        </article>
      )}
    />
  )
}
