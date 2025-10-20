import { strings } from '@/lib/strings'
import type { SkillItem } from '@/types/CVPreview.types'
import { Code } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerifierTooltip } from './ToolTip'
import { VerificationBadge } from './VerificationBadge'

/**
 * Technical Skills Section Component
 * Single Responsibility: Displays technical skills with verification status
 */
export function TechnicalSkillsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.technicalSkills}
        icon={Code}
      >
        <div className='grid grid-cols-2 gap-3'>
          {strings.cvSampleData.skills.map(
            (skill: SkillItem, index: number) => (
              <div
                key={`skill-${skill.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'
              >
                <span className='font-medium text-sm text-slate-800'>
                  {skill.name}
                </span>
                <VerificationBadge verified={skill.verified} />
                {skill.verified && skill.verifier && (
                  <VerifierTooltip verifier={skill.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}
