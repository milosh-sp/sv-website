import { strings } from '@/lib/strings'
import type { ProjectItem } from '@/types/CVPreview.types'
import { FolderOpen } from 'lucide-react'
import { SectionList } from './SectionList'

export function ProjectsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.projects}
      icon={FolderOpen}
      items={strings.cvSampleData.projects}
      itemRenderer={(project: ProjectItem) => (
        <article
          className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'
          aria-label={`Project: ${project.name}`}
        >
          <header className='flex items-center justify-between mb-2'>
            <h4 className='font-medium text-sm text-slate-800'>
              {project.name}
            </h4>
          </header>
          <p className='text-slate-600 text-xs'>{project.description}</p>
        </article>
      )}
    />
  )
}
