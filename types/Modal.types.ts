import type { ReactNode } from 'react'

export interface ModalProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean
  onClose: () => void
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  children: ReactNode
  showCloseButton?: boolean
  showOverlay?: boolean
  closeOnOverlayClick?: boolean
  className?: string
}
