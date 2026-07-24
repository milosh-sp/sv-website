'use client'

import { Suspense } from 'react'
import { useReferralStorage } from '@/hooks/useReferralStorage'

function ReferralStorageContent() {
  useReferralStorage()
  return null
}

export function ReferralStorage() {
  return (
    <Suspense fallback={null}>
      <ReferralStorageContent />
    </Suspense>
  )
}
