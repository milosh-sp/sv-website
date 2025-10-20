import { useMemo } from 'react'
import { CVSectionHeader } from './CVSectionHeader'
import { VerificationBadge } from './VerificationBadge'
import { VerifierTooltip } from './ToolTip'
import { cn } from '@/lib/utils'
import type { BaseSectionItem } from '@/types/CVPreview.types'
import type { SectionListProps } from '@/types/SectionList.types'

export function SectionList<T extends BaseSectionItem>({
  title,
  icon,
  items,
  itemRenderer,
}: SectionListProps<T>) {
  // Memoize layout decision to prevent recalculation on every render
  const useGridLayout = useMemo(() => items.length >= 4, [items.length])

  return (
    <div>
      <CVSectionHeader title={title} icon={icon}>
        <div
          className={cn(
            useGridLayout
              ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
              : 'space-y-4'
          )}
        >
          {items.map((item, index) => (
            <div key={`${item.name}-${index}`} className='relative group'>
              {itemRenderer(item)}
              <div className='absolute top-0 right-0 flex items-center gap-1'>
                <VerificationBadge verified={item.verified ?? 'unverified'} />
                {item.verifier && item.verified === 'verified' && (
                  <VerifierTooltip verifier={item.verifier} />
                )}
              </div>
            </div>
          ))}
        </div>
      </CVSectionHeader>
    </div>
  )
}
