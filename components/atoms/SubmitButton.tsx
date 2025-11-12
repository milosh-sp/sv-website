'use client'

import type { SubmitButtonProps } from '@/types/SignupModalComponents.types'
import { Button } from '@/components/atoms/Button'

export function SubmitButton({
  isSubmitting,
  isDisabled,
  ariaLabel,
  loadingText,
  idleText,
  className,
  ...props
}: SubmitButtonProps) {
  return (
    <Button
      type='submit'
      disabled={isDisabled}
      className='w-full h-12 text-base btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
      aria-label={ariaLabel}
      aria-busy={isSubmitting}
      tabIndex={0}
      {...props}
    >
      {isSubmitting ? (
        <>
          <div
            className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'
            aria-hidden='true'
          />
          {loadingText}
        </>
      ) : (
        idleText
      )}
    </Button>
  )
}
