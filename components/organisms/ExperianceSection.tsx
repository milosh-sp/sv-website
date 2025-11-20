import { strings } from '@/lib/strings'
import type { ExperienceItem } from '@/types/CVPreview.types'
import { Briefcase } from 'lucide-react'
import { SectionList } from '@/components/organisms/SectionList'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <SectionList
      className={cn('h-40 overflow-hidden md:h-auto')}
      title={strings.cvSampleData.sections.experience}
      icon={Briefcase}
      items={strings.cvSampleData.experience}
      itemRenderer={(job: ExperienceItem) => (
        <article
          aria-labelledby={`job-title-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <header className='flex justify-between items-start mb-1'>
            <Heading
              level={4}
              variant='subheading'
              size='sm'
              id={`job-title-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {job.title}
            </Heading>
            <time className='text-xs text-gray-500' dateTime={job.period}>
              {job.period}
            </time>
          </header>
          <Text variant='caption' className='text-slate-800 mb-2'>
            {job.company}
          </Text>
          <Text variant='caption' className='text-gray-600'>
            {job.description}
          </Text>
        </article>
      )}
    />
  )
}
