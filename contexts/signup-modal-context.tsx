"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import type { UserType } from "@/types/form-data"

interface SignupModalContextType {
  isOpen: boolean
  userType: UserType
  openModal: (userType?: UserType) => void
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
  const [userType, setUserType] = useState<UserType>(null)

  const openModal = useCallback((selectedUserType?: UserType) => {
    setUserType(selectedUserType || null)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Reset user type when modal closes
    setTimeout(() => setUserType(null), 300)
  }, [])

  const toggleModal = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const value: SignupModalContextType = {
    isOpen,
    userType,
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
