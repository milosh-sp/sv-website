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
        <div className='relative pb-4'>
          <div className='flex justify-between items-start mb-1'>
            <span className='font-medium text-sm'>{job.title}</span>
            <span className='text-xs text-gray-500'>{job.period}</span>
          </div>
          <div className='text-slate-800 text-sm mb-2'>{job.company}</div>
          <p className='text-gray-600 text-xs'>{job.description}</p>
        </div>
      )}
    />
  )
}
