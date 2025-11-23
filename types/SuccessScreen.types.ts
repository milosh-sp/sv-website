import type { HTMLAttributes, ReactNode } from 'react'

interface SuccessScreenProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  personaType?: 'candidate' | 'verifier' | 'hiring-manager'
  messageProps?: {
    title: string
    description: string
    backToHomepage: string
    checkEmailMessage: string
  }
}

export type { SuccessScreenProps }
