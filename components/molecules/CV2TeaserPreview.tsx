import { CVPreviewBody } from '../organisms/CVPreviewBody'
import { cn } from '@/lib/utils'
import { QrCode } from 'lucide-react'
import { Text } from '@/components/atoms/Text'
import { strings } from '@/lib/strings'

export function CV2TeaserPreview() {
  return (
    <div
      className={cn(
        'relative h-140 w-full overflow-hidden rounded-xl sm:h-170',
        'bg-white border border-slate-200 shadow-2xl'
      )}
    >
      <div className={cn('relative h-full')}>
        <CVPreviewBody variant='compact' />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 h-[40%]',
            'bg-linear-to-t from-white to-transparent pointer-events-none'
          )}
          aria-hidden='true'
        />
        <aside
          className='absolute inset-x-3 bottom-3 z-10 flex items-center gap-3 rounded-lg border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5'
          aria-label={strings.cvPreview.accessibility.qrVisual}
        >
          <div className='shrink-0 rounded-md bg-muted p-2'>
            <QrCode className='h-10 w-10 text-foreground' aria-hidden='true' />
          </div>
          <div>
            <Text variant='caption' className='font-semibold text-foreground'>
              {strings.cvSampleData.qrSection.viewHistoryLink}
            </Text>
            <Text variant='caption'>
              {strings.cvSampleData.qrSection.scanText}
            </Text>
          </div>
        </aside>
      </div>
    </div>
  )
}
