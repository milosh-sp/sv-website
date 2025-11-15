import { strings } from '@/lib/strings'
import type { SkillItem } from '@/types/CVPreview.types'
import { Code } from 'lucide-react'
import { SectionList } from '@/components/organisms/SectionList'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'

export function TechnicalSkillsSectionCv() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.technicalSkills}
      icon={Code}
      items={strings.cvSampleData.skills}
      itemRenderer={(skill: SkillItem) => (
        <article
          className={cn(
            'pl-3 pb-1 pt-1 rounded-lg border-l-4 border-slate-700'
          )}
          aria-label={`Technical skill: ${skill.name}`}
        >
          <Text>{skill.name}</Text>
        </article>
      )}
    />
  )
}
