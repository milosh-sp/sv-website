import { strings } from '@/lib/strings'
import type { SkillItem } from '@/types/CVPreview.types'
import { Code } from 'lucide-react'
import { SectionList } from '@/components/organisms/SectionList'

export function TechnicalSkillsSectionCv() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.technicalSkills}
      icon={Code}
      items={strings.cvSampleData.skills}
      itemRenderer={(skill: SkillItem) => (
        <article
          className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700'
          aria-label={`Technical skill: ${skill.name}`}
        >
          <h4 className='font-medium text-sm text-slate-800'>{skill.name}</h4>
        </article>
      )}
    />
  )
}
