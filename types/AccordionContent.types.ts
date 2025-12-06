import type { ComponentProps } from 'react'

interface AccordionContentProps extends ComponentProps<'dd'> {
  panelId: string
  isOpen: boolean
  children: React.ReactNode
  panelClassName?: string
}

export type { AccordionContentProps }
