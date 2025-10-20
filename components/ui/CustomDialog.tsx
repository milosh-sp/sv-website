import { CustomDialogProps } from '@/types/CustomDialogProps.types'
import type { MouseEvent } from 'react'

const CustomDialog = ({ isOpen, onClose, children }: CustomDialogProps) => {
  if (!isOpen) return null

  /**
   * Handle backdrop click to close modal
   * Prevents event propagation from content clicks
   */
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30'
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }}
      role='dialog'
      aria-modal='true'
      tabIndex={-1}
    >
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <button
          type='button'
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
          onClick={onClose}
          aria-label='Close dialog'
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default CustomDialog
