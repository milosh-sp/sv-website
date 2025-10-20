import { strings } from '@/lib/strings'
import type { SkillItem } from '@/types/CVPreview.types'
import { Code } from 'lucide-react'
import { SectionList } from './SectionList'

export function TechnicalSkillsSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.technicalSkills}
      icon={Code}
      items={strings.cvSampleData.skills}
      itemRenderer={(skill: SkillItem) => (
        <div className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'>
          <span className='font-medium text-sm text-slate-800'>
            {skill.name}
          </span>
        </div>
      )}
    />
  )
}
