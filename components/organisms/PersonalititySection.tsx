import { strings } from '@/lib/strings'
import type { PersonalityItem } from '@/types/CVPreview.types'
import { SectionList } from '@/components/organisms/SectionList'
import { cn } from '@/lib/utils'
import { Text } from '@/components/atoms/Text'
import { UserSearch } from 'lucide-react'

export function PersonalitySection() {
  return (
    <SectionList
      gridLayout
      className={cn('h-30 overflow-hidden md:overflow-visible md:h-auto')}
      title={strings.cvSampleData.sections.personality}
      icon={UserSearch}
      items={strings.cvSampleData.personality}
      itemRenderer={(personality: PersonalityItem) => (
        <article
          className={cn('p-3 rounded-lg border-l-4 border-slate-700')}
          aria-label={`Personality: ${personality.name}`}
        >
          <Text>{personality.name}</Text>
        </article>
      )}
    />
  )
}
