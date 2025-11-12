'use client'
import { createContext, useContext, useState } from 'react'

import type { UserType } from '@/types/FormData.types'
import type { SignupModalContextType } from '@/types/SignUpModal.types'
import type { SignupModalProviderProps } from '@/types/SignUpModalProvider.types'

const SignupModalContext = createContext<SignupModalContextType | null>(null)

export function useSignupModal() {
  const context = useContext(SignupModalContext)
  if (!context) {
    throw new Error('useSignupModal must be used within a SignupModalProvider')
  }
  return context
}

export function SignupModalProvider({ children }: SignupModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [userType, setUserType] = useState<UserType>('member')

  const openModal = (selectedUserType: UserType) => {
    setUserType(selectedUserType)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Reset user type when modal closes
    setTimeout(() => setUserType('member'), 300)
  }

  const toggleModal = () => {
    setIsOpen((prev) => !prev)
  }

  const value = {
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
