import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { Stamp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroVisual() {
  return (
    <div className={cn('relative h-96 md:h-full min-h-96')}>
      <CV2TeaserPreview />
      <div
        className={cn(
          'absolute bottom-[-40] right-[-40]',
          'bg-success rounded-full p-4',
          'shadow-2xl border-4 border-background',
          'transform -rotate-[-40deg]'
        )}
        role='img'
        aria-label='CV2.0 Verified stamp'
      >
        <Stamp
          className={cn('h-16 w-16 text-success-foreground')}
          aria-hidden='true'
        />
      </div>
    </div>
  )
}
