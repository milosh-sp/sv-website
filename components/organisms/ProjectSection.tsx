import { strings } from '@/lib/strings'
import type { ProjectItem } from '@/types/CVPreview.types'
import { SectionList } from '@/components/organisms/SectionList'
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
          className={cn('pl-3 rounded-lg border-l-4 border-slate-700')}
          aria-label={`Project: ${project.name}`}
        >
          <Text className={cn('font-bold')}>{project.name}</Text>
          <Text variant='caption'>{project.description}</Text>
        </article>
      )}
    />
  )
}
