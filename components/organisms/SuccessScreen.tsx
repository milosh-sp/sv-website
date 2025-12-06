import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

import type { SuccessScreenProps } from '@/types/SuccessScreen.types'

export function SuccessScreen({
  icon = <CheckCircle className={cn('w-16 h-16 text-success')} />,
  personaType,
  className,
  messageProps,
  ...props
}: SuccessScreenProps) {
  const message =
    messageProps ??
    strings.waitlistForms.successScreen[personaType ?? 'candidate']

  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8 py-12',
        className
      )}
      {...props}
    >
      <article className={cn('max-w-md w-full text-center space-y-6')}>
        {/* Success Icon */}
        <div className={cn('flex justify-center')}>{icon}</div>

        {/* Title */}
        <Heading level={1} variant='heading'>
          {message.title}
        </Heading>

        {/* Description */}
        <Text variant='body-large' className='text-muted-foreground'>
          {message.description}
        </Text>

        {/* CTA Button */}
        <Link
          href='/'
          className={cn(
            'inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
          )}
        >
          {message.backToHomepage}
        </Link>

        {/* Additional Info */}
        <Text variant='caption' className='text-slate-500 pt-4'>
          {message.checkEmailMessage}
        </Text>
      </article>
    </main>
  )
}
