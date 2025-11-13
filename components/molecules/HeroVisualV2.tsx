import { CheckCircle2, Zap } from 'lucide-react'

export function HeroVisualV2() {
  return (
    <div className='relative h-96 md:h-full min-h-96'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Floating circles */}
        <div className='absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl' />
        <div className='absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl' />
      </div>

      {/* Main content container */}
      <div className='relative h-full flex items-center justify-center'>
        <div className='w-full max-w-sm space-y-6'>
          {/* Top stat card */}
          <div className='bg-white rounded-xl shadow-lg p-6 border border-slate-100 transform hover:scale-105 transition-transform duration-300'>
            <div className='flex items-start justify-between mb-4'>
              <div>
                <p className='text-sm text-slate-600 mb-1'>Verified Skills</p>
                <p className='text-3xl font-bold text-slate-900'>10K+</p>
              </div>
              <div className='w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center'>
                <CheckCircle2
                  className='w-6 h-6 text-emerald-600'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
              <div className='h-full w-4/5 bg-linear-to-r from-emerald-400 to-emerald-600 rounded-full' />
            </div>
          </div>

          {/* Middle stat card */}
          <div className='bg-white rounded-xl shadow-lg p-6 border border-slate-100 transform hover:scale-105 transition-transform duration-300 ml-8'>
            <div className='flex items-start justify-between mb-4'>
              <div>
                <p className='text-sm text-slate-600 mb-1'>Active Verifiers</p>
                <p className='text-3xl font-bold text-slate-900'>5K+</p>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                <Zap className='w-6 h-6 text-blue-600' aria-hidden='true' />
              </div>
            </div>
            <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
              <div className='h-full w-3/5 bg-linear-to-r from-blue-400 to-blue-600 rounded-full' />
            </div>
          </div>

          {/* Bottom stat card */}
          <div className='bg-white rounded-xl shadow-lg p-6 border border-slate-100 transform hover:scale-105 transition-transform duration-300'>
            <div className='flex items-start justify-between mb-4'>
              <div>
                <p className='text-sm text-slate-600 mb-1'>Success Rate</p>
                <p className='text-3xl font-bold text-slate-900'>98%</p>
              </div>
              <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                <CheckCircle2
                  className='w-6 h-6 text-purple-600'
                  aria-hidden='true'
                />
              </div>
            </div>
            <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
              <div className='h-full w-11/12 bg-linear-to-r from-purple-400 to-purple-600 rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
