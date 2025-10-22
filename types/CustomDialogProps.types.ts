import type { ComponentProps, ReactNode } from 'react'

interface CustomDialogProps extends ComponentProps<'div'> {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export type { CustomDialogProps }
