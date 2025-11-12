import { strings } from '@/lib/strings'
import { QrCode } from 'lucide-react'

export function QrCodeSection() {
  return (
    <section
      className='bg-gray-50 p-6 text-center border-t'
      aria-labelledby='qr-code-heading'
    >
      <figure className='w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center'>
        <QrCode className='h-12 w-12 text-gray-600' aria-hidden='true' />
      </figure>
      <p id='qr-code-heading' className='text-sm text-gray-600 mb-2'>
        {strings.cvSampleData.qrSection.scanText}
      </p>
      <button
        type='button'
        className='text-slate-800 text-sm hover:underline bg-transparent border-none cursor-pointer'
        aria-label={`${strings.cvSampleData.qrSection.viewHistoryLink}`}
      >
        {strings.cvSampleData.qrSection.viewHistoryLink}
      </button>
    </section>
  )
}
