import { Sparkles } from 'lucide-react'

export function HeroVisual() {
  return (
    <div className='relative h-96 md:h-full min-h-96'>
      {/* Decorative gradient background */}
      <div className='absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-transparent rounded-2xl' />

      {/* Main showcase container */}
      <div className='relative h-full flex items-center justify-center p-8'>
        {/* Accent bar on the right */}
        <div className='absolute left-0 top-1/4 w-1 h-32 bg-linear-to-b from-blue-600 to-purple-600 rounded-full' />

        {/* Central showcase area with cards */}
        <div className='relative w-full max-w-sm'>
          {/* Top card - tilted left */}
          <div className='absolute -top-8 -left-12 w-32 h-40 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 border border-slate-100'>
            <div className='w-full h-24 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-md mb-3' />
            <div className='space-y-2'>
              <div className='h-2 bg-slate-200 rounded w-3/4' />
              <div className='h-2 bg-slate-200 rounded w-1/2' />
            </div>
          </div>

          {/* Center card - main focus */}
          <div className='relative w-full bg-white rounded-xl shadow-2xl p-6 border border-slate-100 z-10'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-blue-600' />
                <div className='w-3 h-3 rounded-full bg-purple-600' />
                <div className='w-3 h-3 rounded-full bg-emerald-500' />
              </div>
              <Sparkles
                className='w-5 h-5 text-purple-600'
                aria-hidden='true'
              />
            </div>

            <div className='space-y-4'>
              <div className='space-y-2'>
                <div className='h-3 bg-slate-900 rounded w-2/3' />
                <div className='h-2 bg-slate-300 rounded w-full' />
                <div className='h-2 bg-slate-300 rounded w-5/6' />
              </div>

              <div className='grid grid-cols-3 gap-2 pt-4'>
                <div className='h-12 bg-emerald-50 rounded-lg border border-emerald-200' />
                <div className='h-12 bg-blue-50 rounded-lg border border-blue-200' />
                <div className='h-12 bg-purple-50 rounded-lg border border-purple-200' />
              </div>
            </div>
          </div>

          {/* Bottom card - tilted right */}
          <div className='absolute -bottom-8 -right-12 w-32 h-40 bg-white rounded-lg shadow-lg p-4 transform rotate-6 border border-slate-100'>
            <div className='w-full h-24 bg-linear-to-br from-blue-400 to-blue-500 rounded-md mb-3' />
            <div className='space-y-2'>
              <div className='h-2 bg-slate-200 rounded w-3/4' />
              <div className='h-2 bg-slate-200 rounded w-1/2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
