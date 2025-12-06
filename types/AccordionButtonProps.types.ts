import type { ComponentProps, ReactNode } from 'react'

interface AccordionButtonProps extends ComponentProps<'button'> {
  buttonId: string
  panelId: string
  isOpen: boolean
  onToggle: () => void
  trigger: ReactNode
  icon?: ReactNode
  showIcon?: boolean
  triggerClassName?: string
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

export type { AccordionButtonProps }
