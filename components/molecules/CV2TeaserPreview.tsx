'use client'

import { CVPreviewBody } from '../organisms/CVPreviewBody'

export function CV2TeaserPreview() {
  return (
    <div className='relative w-full h-140 overflow-hidden rounded-xl bg-white border border-slate-200 shadow-2xl'>
      <div className='relative h-full'>
        <CVPreviewBody />
      </div>
    </div>
  )
}
