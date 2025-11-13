'use client'

import { strings } from '@/lib/strings'
import { Award, CircleStar } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export function HeroButtons() {
  const router = useRouter()

  const handleNavigateToCandidate = () => router.push('/candidate')
  const handleNavigateToVerifier = () => router.push('/verifier')

  return (
    <article
      className={cn('flex flex-col sm:flex-row gap-4 mb-12')}
      aria-label='Primary actions'
    >
      <Button
        onClick={handleNavigateToCandidate}
        size='lg'
        className={cn(
          'h-14 px-8 text-base',
          'bg-emerald-600 hover:bg-emerald-700',
          'text-white shadow-md hover:shadow-lg',
          'transition-all duration-300 rounded-lg font-semibold'
        )}
        aria-label={strings.hero.accessibility.openSignupModal}
        type='button'
      >
        <CircleStar className='h-5 w-5 mr-2' aria-hidden='true' />
        <span>{strings.hero.buttons.verifySkills}</span>
      </Button>
      <Button
        onClick={handleNavigateToVerifier}
        size='lg'
        className={cn(
          'h-14 px-8 text-base',
          'bg-blue-600 hover:bg-blue-700',
          'text-white shadow-md hover:shadow-lg',
          'transition-all duration-300 rounded-lg font-semibold'
        )}
        aria-label={strings.hero.accessibility.openEarnModal}
        type='button'
      >
        <Award className='h-5 w-5 mr-2' aria-hidden='true' />
        <span>{strings.hero.buttons.earnByVerifying}</span>
      </Button>
    </article>
  )
}
