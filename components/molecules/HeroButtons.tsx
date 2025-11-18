'use client'

import { strings } from '@/lib/strings'
import { Award, CircleStar } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export function HeroButtons({
  showCandidate = true,
  showVerifier = true,
}: {
  showCandidate?: boolean
  showVerifier?: boolean
}) {
  const router = useRouter()

  const handleNavigateToCandidate = () => router.push('/candidate')
  const handleNavigateToVerifier = () => router.push('/verifier')

  return (
    <article
      className={cn('flex flex-col sm:flex-row gap-4 mb-1 md:mb-12')}
      aria-label='Primary actions'
    >
      {showCandidate && (
        <Button
          onClick={handleNavigateToCandidate}
          variant='hero-emerald'
          size='lg'
          className={cn('h-14 px-8 text-base rounded-lg font-semibold')}
          aria-label={strings.hero.accessibility.openSignupModal}
          type='button'
        >
          <CircleStar className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
          <span>{strings.hero.buttons.verifySkills}</span>
        </Button>
      )}

      {showVerifier && (
        <Button
          onClick={handleNavigateToVerifier}
          variant='hero-blue'
          size='lg'
          className={cn('h-14 px-8 text-base rounded-lg font-semibold')}
          aria-label={strings.hero.accessibility.openEarnModal}
          type='button'
        >
          <Award className={cn('h-5 w-5 mr-2')} aria-hidden='true' />
          <span>{strings.hero.buttons.earnByVerifying}</span>
        </Button>
      )}
    </article>
  )
}
