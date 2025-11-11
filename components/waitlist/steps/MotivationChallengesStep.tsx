'use client'

import { AlertCircle, Lightbulb } from 'lucide-react'
import { TextAreaField } from '@/components/ui/TextAreaField'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface MotivationChallengesStepProps extends HTMLAttributes<HTMLDivElement> {
  motivation: string
  challenges: string
  errors: Record<string, string>
  isSubmitting: boolean
  onMotivationChange: (value: string) => void
  onChallengesChange: (value: string) => void
}

export function MotivationChallengesStep({
  motivation,
  challenges,
  errors,
  isSubmitting,
  onMotivationChange,
  onChallengesChange,
  className,
  ...props
}: MotivationChallengesStepProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <TextAreaField
        id='motivation'
        placeholder='Tell us what motivates you to join our platform...'
        value={motivation}
        onChange={(e) => onMotivationChange(e.target.value)}
        error={errors.motivation}
        disabled={isSubmitting}
        icon={<Lightbulb className='w-5 h-5' />}
        label='What motivates you?'
        ariaDescribedBy='motivation-error'
        rows={4}
      />

      <TextAreaField
        id='challenges'
        placeholder='What challenges are you facing?'
        value={challenges}
        onChange={(e) => onChallengesChange(e.target.value)}
        error={errors.challenges}
        disabled={isSubmitting}
        icon={<AlertCircle className='w-5 h-5' />}
        label='What challenges are you facing?'
        ariaDescribedBy='challenges-error'
        rows={4}
      />
    </div>
  )
}
