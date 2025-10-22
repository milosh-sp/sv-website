'use client'

import { Button } from '../Button'
import type { SubmitButtonProps } from '@/types/SignupModalComponents.types'

export function SubmitButton({
  isSubmitting,
  isDisabled,
  ariaLabel,
  loadingText,
  idleText,
}: SubmitButtonProps) {
  return (
    <Button
      type='submit'
      disabled={isDisabled}
      className='w-full h-12 text-base btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {isSubmitting ? (
        <>
          <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
          {loadingText}
        </>
      ) : (
        idleText
      )}
    </Button>
  )
}
