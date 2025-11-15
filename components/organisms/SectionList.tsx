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
  const useGridLayout = items.length >= 4

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
              className='flex items-center justify-between gap-3 group'
              aria-posinset={index + 1}
              aria-setsize={items.length}
            >
              <div className='flex-1 min-w-0'>{itemRenderer(item)}</div>
              <div className='relative flex items-center gap-1 shrink-0'>
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
