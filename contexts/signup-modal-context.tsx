"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

interface SignupModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

const SignupModalContext = createContext<SignupModalContextType | null>(null)

export function useSignupModal() {
  const context = useContext(SignupModalContext)
  if (!context) {
    throw new Error("useSignupModal must be used within a SignupModalProvider")
  }
  return context
}

interface SignupModalProviderProps {
  children: React.ReactNode
}

export function SignupModalProvider({ children }: SignupModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const value: SignupModalContextType = {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  }

  return (
    <SignupModalContext.Provider value={value}>
      {children}
    </SignupModalContext.Provider>
  )
}
