'use client'

import { useSignupForm } from '@/hooks/useSignUpForm'
import CustomDialog from './CustomDialog'
import { SignupForm } from './SignupModal/SignupForm'
import { UserTypeHeader } from './SignupModal/UserTypeHeader'

/**
 * SignupModal Component
 * Main modal component that orchestrates the signup flow
 * Single Responsibility: Manages modal state and composition of sub-components
 *
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles modal container and state orchestration
 * - Open/Closed: Extensible through component composition
 * - Liskov Substitution: Consistent component interface
 * - Interface Segregation: Minimal props interface
 * - Dependency Inversion: Uses custom hooks for business logic
 */
export function SignupModal() {
  const {
    formData,
    isSubmitting,
    errors,
    submitStatus,
    honeypotValue,
    handleEmailChange,
    handleLinkedInChange,
    handleGitHubChange,
    handleHoneypotChange,
    handleSubmit,
    closeModal,
    isOpen,
    userType,
  } = useSignupForm()

  return (
    <CustomDialog isOpen={isOpen} onClose={closeModal}>
      <UserTypeHeader userType={userType} />
      <SignupForm
        formData={formData}
        isSubmitting={isSubmitting}
        errors={errors}
        submitStatus={submitStatus}
        honeypotValue={honeypotValue}
        onEmailChange={handleEmailChange}
        onLinkedInChange={handleLinkedInChange}
        onGitHubChange={handleGitHubChange}
        onHoneypotChange={handleHoneypotChange}
        onSubmit={handleSubmit}
      />
    </CustomDialog>
  )
}
