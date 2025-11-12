import { useMemo } from 'react'
import { CVSectionHeader } from '@/components/organisms/CVSectionHeader'
import { VerificationBadge } from '@/components/atoms/VerificationBadge'
import { VerifierTooltip } from '@/components/atoms/ToolTip'
import { cn } from '@/lib/utils'
import type { BaseSectionItem } from '@/types/CVPreview.types'
import type { SectionListProps } from '@/types/SectionList.types'

export function SectionList<T extends BaseSectionItem>({
  title,
  icon,
  items,
  itemRenderer,
  ...props
}: SectionListProps<T>) {
  // Memoize layout decision to prevent recalculation on every render
  const useGridLayout = useMemo(() => items.length >= 4, [items.length])

  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <section aria-labelledby={sectionId} {...props}>
      <CVSectionHeader title={title} icon={icon}>
        <ul
          className={cn(
            'list-none',
            useGridLayout
              ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
              : 'space-y-4'
          )}
          aria-label={`${title} items`}
        >
          {items.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className='relative group'
              aria-posinset={index + 1}
              aria-setsize={items.length}
            >
              {itemRenderer(item)}
              <div className='absolute top-0 right-0 flex items-center gap-1'>
                <VerificationBadge verified={item.verified ?? 'unverified'} />
                {item.verifier && item.verified === 'verified' && (
                  <VerifierTooltip verifier={item.verifier} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </CVSectionHeader>
    </section>
  )
}
