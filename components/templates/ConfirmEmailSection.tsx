'use client'

import { updateSubscriberData } from '@/lib/api'
import { senderGroups } from '@/lib/consts'
import { generateId } from '@/lib/utils/convertToSnakeCase'
import { SatelliteDishIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useEffectEvent, useState } from 'react'
import { SuccessScreen } from '../organisms/SuccessScreen'
import { strings } from '@/lib/strings'

function ConfirmEmailContent() {
  const [isVerifying, setIsVerifying] = useState(true)
  const [error, setError] = useState<string | null>()
  const [referralCode, setReferralCode] = useState<string | null>()
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')

  const handleUpdate = useEffectEvent(async () => {
    const referralCode = generateId()

    const result = await updateSubscriberData({
      id: userId ?? '',
      groups: [senderGroups.verified],
      fields: {
        email_verified: 'true',
        referral_code: referralCode,
      },
    })

    if (result.error) {
      setError(result.error)
      setIsVerifying(false)
    }

    if (result.success) {
      setError(null)
      setReferralCode(referralCode)
      setIsVerifying(false)
    }
  })

  useEffect(() => {
    if (userId) {
      handleUpdate()
    }
  }, [userId])

  if (isVerifying) {
    return (
      <div
        className='flex items-center justify-center min-h-screen'
        aria-live='polite'
        aria-busy='true'
      >
        <div
          className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'
          aria-hidden='true'
        />
      </div>
    )
  }

  return (
    <section>
      {error && (
        <SuccessScreen
          icon={<SatelliteDishIcon className='w-16 h-16' />}
          messageProps={{
            ...strings.confirmEmailScreen.error,
            description: `${strings.confirmEmailScreen.error.description} ${error}`,
          }}
        />
      )}

      {referralCode && !error && (
        <SuccessScreen
          messageProps={{
            ...strings.confirmEmailScreen.success,
            description: strings.confirmEmailScreen.success.description,
          }}
        />
      )}
    </section>
  )
}

export function ConfirmEmailSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmEmailContent />
    </Suspense>
  )
}
