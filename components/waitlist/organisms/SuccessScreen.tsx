'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'

import type { SuccessScreenProps } from '@/types/SuccessScreen.types'

export function SuccessScreen({
  personaType,
  className,
  ...props
}: SuccessScreenProps) {
  const message = strings.waitlistForms.successScreen[personaType]

  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-50 to-white px-4',
        className
      )}
      {...props}
    >
      <article className={cn('max-w-md w-full text-center space-y-6')}>
        {/* Success Icon */}
        <div className={cn('flex justify-center')}>
          <CheckCircle className={cn('w-16 h-16 text-green-600')} />
        </div>

        {/* Title */}
        <h1 className={cn('text-3xl font-bold text-gray-900')}>
          {message.title}
        </h1>

        {/* Description */}
        <p className={cn('text-lg text-gray-600')}>{message.description}</p>

        {/* CTA Button */}
        <Link
          href='/'
          className={cn(
            'inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          )}
        >
          {message.backToHomepage}
        </Link>

        {/* Additional Info */}
        <p className={cn('text-sm text-gray-500 pt-4')}>
          {message.checkEmailMessage}
        </p>
      </article>
    </main>
  )
}
