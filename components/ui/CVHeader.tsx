import { strings } from '@/lib/strings'
import { User } from 'lucide-react'

export function CVHeader() {
  return (
    <div className='bg-slate-800 text-white p-8'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center'>
          <User className='h-12 w-12 text-white' aria-hidden='true' />
        </div>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-white'>
            {strings.cvSampleData.profile.name}
          </h2>
          <p className='text-lg text-slate-200'>
            {strings.cvSampleData.profile.title}
          </p>
        </div>
      </div>
    </div>
  )
}
