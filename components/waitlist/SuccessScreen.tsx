'use client'

import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface SuccessScreenProps extends HTMLAttributes<HTMLDivElement> {
  personaType: 'candidate' | 'verifier' | 'hiring-manager'
}

const PERSONA_MESSAGES = {
  candidate: {
    title: 'Welcome to the Waitlist!',
    description:
      "Thank you for joining our candidate waitlist. We'll review your profile and get back to you soon with next steps.",
  },
  verifier: {
    title: 'Welcome to the Verifier Program!',
    description:
      "Thank you for your interest in becoming a verifier. We'll review your qualifications and contact you shortly.",
  },
  'hiring-manager': {
    title: 'Welcome to Our Hiring Platform!',
    description:
      "Thank you for joining our hiring manager waitlist. We'll be in touch soon with information about verified talent.",
  },
}

export function SuccessScreen({
  personaType,
  className,
  ...props
}: SuccessScreenProps) {
  const message = PERSONA_MESSAGES[personaType]

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4',
        className
      )}
      {...props}
    >
      <div className='max-w-md w-full text-center space-y-6'>
        {/* Success Icon */}
        <div className='flex justify-center'>
          <CheckCircle className='w-16 h-16 text-green-600' />
        </div>

        {/* Title */}
        <h1 className='text-3xl font-bold text-gray-900'>{message.title}</h1>

        {/* Description */}
        <p className='text-lg text-gray-600'>{message.description}</p>

        {/* CTA Button */}
        <Link
          href='/'
          className='inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Back to Homepage
        </Link>

        {/* Additional Info */}
        <p className='text-sm text-gray-500 pt-4'>
          Check your email for confirmation and next steps.
        </p>
      </div>
    </div>
  )
}
