'use client'

import { referralCodeKey } from '@/lib/consts'
import { useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

/**
 * Stores the referral code in local storage if the user lands on the homepage
 */
function ReferralStorageContent() {
  const searchParams = useSearchParams()
  const referralCode = searchParams.get(referralCodeKey)

  useEffect(() => {
    if (referralCode) {
      localStorage.setItem(referralCodeKey, referralCode)
    }
  }, [referralCode])

  return null
}

export function ReferralStorage() {
  return (
    <Suspense fallback={null}>
      <ReferralStorageContent />
    </Suspense>
  )
}
