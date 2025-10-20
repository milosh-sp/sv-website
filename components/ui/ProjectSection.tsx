import { strings } from '@/lib/strings'
import type { ProjectItem } from '@/types/CVPreview.types'
import { FolderOpen } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerifierTooltip } from './ToolTip'
import { VerificationBadge } from './VerificationBadge'

/**
 * Projects Section Component
 * Single Responsibility: Displays project portfolio
 */
export function ProjectsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.projects}
        icon={FolderOpen}
      >
        <div className='space-y-4'>
          {strings.cvSampleData.projects.map(
            (project: ProjectItem, index: number) => (
              <div
                key={`project-${project.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'
              >
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-medium text-sm text-slate-800'>
                    {project.name}
                  </span>
                  <VerificationBadge verified={project.verified} />
                </div>
                <p className='text-slate-600 text-xs'>{project.description}</p>
                {project.verified && project.verifier && (
                  <VerifierTooltip verifier={project.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}
