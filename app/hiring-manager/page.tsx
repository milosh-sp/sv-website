'use client'

import { HiringManagerFormProvider } from '@/context/HiringManagerFormContext'
import { HiringManagerWaitlistForm } from '@/components/organisms/HiringManagerWaitlistForm'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { useHiringManagerFormContext } from '@/context/HiringManagerFormContext'

function HiringManagerFormContent() {
  const context = useHiringManagerFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='hiring-manager' />
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Find Verified Talent
          </h1>
          <p className='text-xl text-gray-600'>
            Access our network of verified professionals
          </p>
        </div>

        {/* Form */}
        <HiringManagerWaitlistForm />
      </div>
    </div>
  )
}

export default function HiringManagerPage() {
  return (
    <HiringManagerFormProvider>
      <HiringManagerFormContent />
    </HiringManagerFormProvider>
  )
}
