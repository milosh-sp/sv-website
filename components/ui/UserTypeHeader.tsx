'use client'

import { Award, CircleStar } from 'lucide-react'
import { cn, getUserSegmentLabel } from '@/lib/utils'
import { strings } from '@/lib/strings'
import VisuallyHidden from './VisuallyHidden'
import type { UserTypeHeaderProps } from '@/types/SignupModalComponents.types'

export function UserTypeHeader({
  userType,
  className,
  ...props
}: UserTypeHeaderProps) {
  if (!userType) {
    return null
  }

  const isMember = userType === 'member'
  const iconColor = isMember ? 'bg-emerald-600' : 'bg-blue-600'
  const textColor = isMember
    ? 'text-emerald-600 border-emerald-100'
    : 'text-blue-600 border-blue-100'

  return (
    <header className={cn('relative mb-6', className)} {...props}>
      <VisuallyHidden>
        <h2 className='text-2xl font-bold text-slate-900 text-center mb-2 pr-12'>
          {strings.signupModal.title}
        </h2>
      </VisuallyHidden>
      <div>
        <div className='flex items-center justify-center gap-3 mb-3'>
          <div
            className={cn('p-2 rounded-lg shadow-sm', iconColor)}
            role='img'
            aria-label={`${getUserSegmentLabel(userType)} icon`}
          >
            {isMember ? (
              <CircleStar className='h-5 w-5 text-white' aria-hidden='true' />
            ) : (
              <Award className='h-5 w-5 text-white' aria-hidden='true' />
            )}
          </div>
        </div>
        <div className='text-center'>
          <p
            className={cn(
              'text-xl font-semibold bg-white px-4 py-2 rounded-lg inline-block shadow-sm border',
              textColor
            )}
          >
            {getUserSegmentLabel(userType)}
          </p>
        </div>
      </div>
    </header>
  )
}
