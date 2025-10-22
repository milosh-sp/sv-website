'use client'

import { strings } from '@/lib/strings'
import { Award, CircleStar } from 'lucide-react'
import { Button } from './Button'
import { useSignupModal } from '@/contexts/SignupModalContext'

export function HeroButtons() {
  const { openModal } = useSignupModal()

  return (
    <article
      className='flex flex-col sm:flex-row gap-4 justify-center mb-16'
      aria-label={'Primary actions'}
    >
      <Button
        onClick={() => openModal('member')}
        size='lg'
        className='h-16 px-12 text-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium'
        aria-label={strings.hero.accessibility.openSignupModal}
        type='button'
      >
        <CircleStar className='h-6 w-6 mr-2' aria-hidden='true' />
        <span>{strings.hero.buttons.verifySkills}</span>
      </Button>
      <Button
        onClick={() => openModal('guru')}
        size='lg'
        className='h-16 px-12 text-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg font-medium'
        aria-label={strings.hero.accessibility.openEarnModal}
        type='button'
      >
        <Award className='h-6 w-6 mr-2' aria-hidden='true' />
        <span>{strings.hero.buttons.earnByVerifying}</span>
      </Button>
    </article>
  )
}
