import type { HTMLAttributes } from 'react'

interface SuccessScreenProps extends HTMLAttributes<HTMLDivElement> {
  personaType: 'candidate' | 'verifier' | 'hiring-manager'
}

export type { SuccessScreenProps }
