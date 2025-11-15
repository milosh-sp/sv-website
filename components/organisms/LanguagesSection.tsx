import { strings } from '@/lib/strings'
import type { LanguageItem } from '@/types/CVPreview.types'
import { SectionList } from '@/components/organisms/SectionList'

const LanguageIcon = strings.cvSampleData.languages[0].icon

export function LanguagesSection() {
  return (
    <SectionList
      title={strings.cvSampleData.sections.languages}
      icon={LanguageIcon}
      items={strings.cvSampleData.languages}
      itemRenderer={(language: LanguageItem) => (
        <article
          className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700'
          aria-label={`${language.name}: ${language.level}`}
        >
          <header className='flex items-center justify-between mb-1'>
            <h4 className='font-medium text-sm text-slate-800'>
              {language.name}
            </h4>
          </header>
          <p className='text-slate-600 text-xs'>{language.level}</p>
        </article>
      )}
    />
  )
}
