import { strings } from '@/lib/strings'
import type { ProjectItem } from '@/types/CVPreview.types'
import { SectionList } from '@/components/organisms/SectionList'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'

const ProjectIcon = strings.cvSampleData.projects[0].icon

export function ProjectsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.projects}
      icon={ProjectIcon}
      items={strings.cvSampleData.projects}
      itemRenderer={(project: ProjectItem) => (
        <article
          className={cn(
            'bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700'
          )}
          aria-label={`Project: ${project.name}`}
        >
          <header className='flex items-center justify-between mb-2'>
            <Heading level={4} variant='subheading' size='sm'>
              {project.name}
            </Heading>
          </header>
          <Text variant='caption'>{project.description}</Text>
        </article>
      )}
    />
  )
}
