'use client'

import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { updateSubscriberData } from '@/lib/api'
import { senderGroups } from '@/lib/consts'
import { cn } from '@/lib/utils'
import { generateReferralCode } from '@/lib/utils/convertToSnakeCase'
import { useSearchParams } from 'next/navigation'
import { useEffect, useEffectEvent } from 'react'

export function ConfirmEmailSection() {
  const searchParams = useSearchParams()
  const userId = searchParams.get('id')

  const handleUpdate = useEffectEvent(() => {
    updateSubscriberData({
      id: searchParams.get('id') ?? '',
      fields: {
        email_verified: 'true',
        groups: [senderGroups.active],
        referral_code: generateReferralCode(),
      },
    })
  })

  useEffect(() => {
    if (userId) {
      handleUpdate()
    }
  }, [userId])

  return (
    <SectionWrapper
      id='confirm-email'
      className={cn('py-16 bg-white')}
      aria-labelledby='confirm-email-heading'
    >
      <h1>You verified your email!</h1>
    </SectionWrapper>
  )
}
