'use client'

import { VerifierFormProvider } from '@/context/VerifierFormContext'
import { VerifierWaitlistForm } from '@/components/organisms/VerifierWaitlistForm'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { useVerifierFormContext } from '@/context/VerifierFormContext'

function VerifierFormContent() {
  const context = useVerifierFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='verifier' />
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Become a Skill Verifier
          </h1>
          <p className='text-xl text-gray-600'>
            Help verify skills and build trust in our community
          </p>
        </div>

        {/* Form */}
        <VerifierWaitlistForm />
      </div>
    </div>
  )
}

export default function VerifierPage() {
  return (
    <VerifierFormProvider>
      <VerifierFormContent />
    </VerifierFormProvider>
  )
}
