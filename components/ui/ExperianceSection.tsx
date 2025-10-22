import { strings } from '@/lib/strings'
import type { ExperienceItem } from '@/types/CVPreview.types'
import { Briefcase } from 'lucide-react'
import { SectionList } from './SectionList'

export function ExperienceSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.experience}
      icon={Briefcase}
      items={strings.cvSampleData.experience}
      itemRenderer={(job: ExperienceItem) => (
        <article
          className='relative pb-4'
          aria-labelledby={`job-title-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <header className='flex justify-between items-start mb-1'>
            <h4
              id={`job-title-${job.title.toLowerCase().replace(/\s+/g, '-')}`}
              className='font-medium text-sm'
            >
              {job.title}
            </h4>
            <time className='text-xs text-gray-500' dateTime={job.period}>
              {job.period}
            </time>
          </header>
          <p className='text-slate-800 text-sm mb-2'>{job.company}</p>
          <p className='text-gray-600 text-xs'>{job.description}</p>
        </article>
      )}
    />
  )
}
