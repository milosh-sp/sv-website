import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { cn } from '@/lib/utils'

export function HeroVisual() {
  return (
    <div className={cn('relative h-full')}>
      <CV2TeaserPreview />
    </div>
  )
}
