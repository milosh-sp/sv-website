import { strings } from '@/lib/strings'
import type { LanguageItem } from '@/types/CVPreview.types'
import { Globe } from 'lucide-react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerifierTooltip } from './ToolTip'
import { VerificationBadge } from './VerificationBadge'

/**
 * Languages Section Component
 * Single Responsibility: Displays language proficiency
 */
export function LanguagesSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.languages}
        icon={Globe}
      >
        <div className='grid grid-cols-1 gap-3'>
          {strings.cvSampleData.languages.map(
            (language: LanguageItem, index: number) => (
              <div
                key={`language-${language.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'
              >
                <div className='flex items-center justify-between mb-1'>
                  <span className='font-medium text-sm text-slate-800'>
                    {language.name}
                  </span>
                  <VerificationBadge verified={language.verified} />
                </div>
                <div className='text-slate-600 text-xs'>{language.level}</div>
                {language.verified === true && language.verifier && (
                  <VerifierTooltip verifier={language.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}
