import type { VerifierTooltipProps } from '@/types/CVPreview.types'

export function VerifierTooltip({ verifier }: VerifierTooltipProps) {
  const [verifierName, verifierRole] = verifier.split(' - ')

  return (
    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48'>
      <div className='text-center'>
        <div>Verified by {verifierName}</div>
        <div className='text-slate-300 mt-1'>{verifierRole}</div>
      </div>
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900' />
    </div>
  )
}
