import type { ReactNode } from 'react'

interface CustomDialogProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export type { CustomDialogProps }
