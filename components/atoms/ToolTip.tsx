import { cn } from '@/lib/utils'
import type { TooltipProps } from '@/types/CVPreview.types'

export function Tooltip({ verifier, className, ...props }: TooltipProps) {
  const [verifierName, verifierRole] = verifier.split(' - ')

  return (
    <aside
      className={cn(
        'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        'px-3 py-2 bg-slate-900 text-white text-xs rounded-lg',
        'opacity-0 group-hover:opacity-100 transition-all duration-200',
        'z-99 shadow-lg max-w-48 pointer-events-none',
        className
      )}
      {...props}
    >
      <div className='text-center'>
        <p className='font-medium'>
          <span className='font-semibold'>{verifierName}</span>
        </p>
        {verifierRole && <p className='text-slate-300 mt-1'>{verifierRole}</p>}
      </div>
      <div
        className={cn(
          'absolute top-full left-1/2 transform -translate-x-1/2',
          'w-0 h-0 border-l-4 border-r-4 border-t-4',
          'border-transparent border-t-slate-900'
        )}
        aria-hidden='true'
      />
    </aside>
  )
}
