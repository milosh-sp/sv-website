import { strings } from '@/lib/strings'
import { GraduationCap } from 'lucide-react'
import { SectionList } from '@/components/organisms/SectionList'
import type { EducationSectionItem } from '@/types/CVPreview.types'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

export function EducationSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.education}
      icon={GraduationCap}
      items={strings.cvSampleData.education}
      itemRenderer={(edu: EducationSectionItem) => (
        <article aria-label={`${edu.degree} at ${edu.institution}`}>
          <header className='flex justify-between items-start mb-1'>
            <Heading level={4} variant='subheading' size='sm'>
              {edu.degree}
            </Heading>
            <time className='text-xs text-gray-500' dateTime={edu.period}>
              {edu.period}
            </time>
          </header>
          <Text variant='caption' className='text-slate-800 mb-2'>
            {edu.institution}
          </Text>
        </article>
      )}
    />
  )
}
