import type { CustomDialogProps } from '@/types/CustomDialogProps.types'
import { X } from 'lucide-react'
import type { KeyboardEvent, MouseEvent } from 'react'
import { useEffect, useRef } from 'react'

const CustomDialog = ({ isOpen, onClose, children }: CustomDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      dialogRef.current?.focus()

      return () => {
        previousActiveElement.current?.focus()
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <div
      ref={dialogRef}
      className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30'
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role='dialog'
      aria-modal='true'
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
      tabIndex={-1}
    >
      <div
        className='bg-white p-6 rounded-lg shadow-lg relative'
        role='document'
      >
        <button
          type='button'
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded'
          onClick={onClose}
          aria-label='Close dialog'
        >
          <X className='h-5 w-5 cursor-pointer mr-2 mt-1' />
        </button>
        {children}
      </div>
    </div>
  )
}

export default CustomDialog
