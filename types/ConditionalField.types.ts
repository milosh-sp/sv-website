import type { HTMLAttributes, ReactNode } from 'react'

interface ConditionalFieldProps extends HTMLAttributes<HTMLDivElement> {
  condition: boolean
  children: ReactNode
}

export type { ConditionalFieldProps }
