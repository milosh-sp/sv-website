'use client'

import { CandidateFormProvider } from '@/context/CandidateFormContext'
import { CandidateWaitlistForm } from '@/components/organisms/CandidateWaitlistForm'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { useCandidateFormContext } from '@/context/CandidateFormContext'

function CandidateFormContent() {
  const context = useCandidateFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='candidate' />
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Join Our Candidate Waitlist
          </h1>
          <p className='text-xl text-gray-600'>
            Get your skills verified and discover opportunities
          </p>
        </div>

        {/* Form */}
        <CandidateWaitlistForm />
      </div>
    </div>
  )
}

export default function CandidatePage() {
  return (
    <CandidateFormProvider>
      <CandidateFormContent />
    </CandidateFormProvider>
  )
}
