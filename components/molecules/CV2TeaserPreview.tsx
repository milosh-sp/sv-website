import { CVPreviewBody } from '../organisms/CVPreviewBody'
import { cn } from '@/lib/utils'

export function CV2TeaserPreview() {
  return (
    <div
      className={cn(
        'relative w-full h-170 overflow-hidden rounded-xl',
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
      </div>
    </div>
  )
}
