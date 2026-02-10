import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { cn } from '@/lib/utils'
import { HeroButtons } from '../molecules/HeroButtons'

export function HeroVisual() {
  return (
    <div className={cn('relative h-full')}>
      <CV2TeaserPreview />

      <div className={cn('flex justify-center align-center mt-5')}>
        <HeroButtons showHiringManager />
      </div>
    </div>
  )
}
