'use client'

import { Button } from '@/components/ui/Button'
import { UserPlus } from 'lucide-react'
import { strings } from '@/lib/strings'
import { scrollToSection } from '@/lib/utils'

export function FloatingSignupButton() {
  const handleSignupClick = () => {
    scrollToSection('home')
  }

  return (
    <aside
      className='fixed bottom-6 right-6 z-40 cursor-pointer'
      aria-label={strings.floatingSignupButton.ariaLabel}
    >
      <Button
        onClick={handleSignupClick}
        size='lg'
        className='h-14 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-full group cursor-pointer'
      >
        <span className='flex items-center gap-3'>
          <UserPlus
            className='h-5 w-5 transition-transform group-hover:scale-110'
            aria-hidden='true'
            aria-label={strings.floatingSignupButton.iconAriaLabel}
          />
          <span className='font-semibold text-base'>
            {strings.floatingSignupButton.text}
          </span>
        </span>
      </Button>
    </aside>
  )
}
