'use client'

import { referralCodeKey } from '@/lib/consts'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function useReferralStorage() {
  const searchParams = useSearchParams()
  const referralCode = searchParams.get(referralCodeKey)

  useEffect(() => {
    if (referralCode) {
      localStorage.setItem(referralCodeKey, referralCode)
    }
  }, [referralCode])
}
