'use client'

import { useState, useEffect } from 'react'

interface UseLocalStorageModalOptions {
  storageKey: string
  defaultOpen?: boolean
}

export function useLocalStorageModal({
  storageKey,
  defaultOpen = true,
}: UseLocalStorageModalOptions) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const isDismissed = localStorage.getItem(storageKey)
    setIsOpen(isDismissed ? false : defaultOpen)
  }, [storageKey, defaultOpen])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem(storageKey, 'true')
  }

  const handleOpen = () => {
    setIsOpen(true)
    localStorage.removeItem(storageKey)
  }

  const reset = () => {
    localStorage.removeItem(storageKey)
    setIsOpen(defaultOpen)
  }

  return {
    isOpen,
    setIsOpen,
    handleClose,
    handleOpen,
    reset,
    isMounted,
  }
}
