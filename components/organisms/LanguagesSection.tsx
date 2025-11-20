import { strings } from '@/lib/strings'
import type { LanguageItem } from '@/types/CVPreview.types'
import { SectionList } from '@/components/organisms/SectionList'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'

const LanguageIcon = strings.cvSampleData.languages[0].icon

export function LanguagesSection() {
  return (
    <SectionList
      className={cn('h-30 overflow-hidden md:overflow-visible md:h-auto')}
      title={strings.cvSampleData.sections.languages}
      icon={LanguageIcon}
      items={strings.cvSampleData.languages}
      itemRenderer={(language: LanguageItem) => (
        <article
          className={cn('p-3 rounded-lg border-l-4 border-slate-700')}
          aria-label={`${language.name}: ${language.level}`}
        >
          <Text variant='body' className={cn('font-bold')}>
            {language.name}
          </Text>

          <Text variant='caption' className={cn('text-slate-600')}>
            {language.level}
          </Text>
        </article>
      )}
    />
  )
}
