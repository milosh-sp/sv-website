import { CV2TeaserPreview } from '@/components/molecules/CV2TeaserPreview'
import { Stamp, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroVisual() {
  return (
    <div className={cn('relative h-96 md:h-full min-h-96')}>
      <CV2TeaserPreview />

      <MousePointer2
        className={cn(
          'h-23 w-23',
          'absolute bottom-[390px] right-[-40]',
          'rounded-full p-4'
        )}
        aria-hidden='true'
      />

      <Stamp
        className={cn(
          'h-23 w-23 text-success-foreground',
          'absolute bottom-[-40] right-[-40]',
          'bg-success rounded-full p-4',
          'shadow-2xl border-4 border-background',
          'transform -rotate-[-40deg]',
          'hover:scale-110 active:scale-95 transition-transform duration-200',
          'cursor-pointer'
        )}
        aria-hidden='true'
      />
    </div>
  )
}
