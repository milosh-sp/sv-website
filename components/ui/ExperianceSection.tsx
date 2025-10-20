import { strings } from '@/lib/strings'
import type { ExperienceItem } from '@/types/CVPreview.types'
import { Briefcase } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerificationBadge } from './VerificationBadge'

/**
 * Experience Section Component
 * Single Responsibility: Displays work experience
 */
export function ExperienceSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.experience}
        icon={Briefcase}
      >
        <div className='space-y-6'>
          {strings.cvSampleData.experience.map(
            (job: ExperienceItem, index: number) => (
              <div
                key={`experience-${job.company}-${index}`}
                className='relative pb-4'
              >
                <div className='flex justify-between items-start mb-1'>
                  <span className='font-medium text-sm'>{job.title}</span>
                  <span className='text-xs text-gray-500'>{job.period}</span>
                </div>
                <div className='text-slate-800 text-sm mb-2'>{job.company}</div>
                <p className='text-gray-600 text-xs'>{job.description}</p>
                <VerificationBadge
                  verified={job.verified}
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
