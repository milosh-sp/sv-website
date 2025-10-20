import { strings } from '@/lib/strings'
import type { ProjectItem } from '@/types/CVPreview.types'
import { FolderOpen } from 'lucide-react'
import { SectionList } from './SectionList'

/**
 * Projects Section Component
 * Single Responsibility: Displays project portfolio
 */
export function ProjectsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.projects}
      icon={FolderOpen}
      items={strings.cvSampleData.projects}
      itemRenderer={(project: ProjectItem) => (
        <div className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-medium text-sm text-slate-800'>
              {project.name}
            </span>
          </div>
          <p className='text-slate-600 text-xs'>{project.description}</p>
        </div>
      )}
    />
  )
}
