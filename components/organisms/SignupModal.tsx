'use client'

import { useSignupForm } from '@/hooks/useSignUpForm'
import CustomDialog from '@/components/atoms/CustomDialog'
import { SignupForm } from '@/components/organisms/SignupForm'
import { UserTypeHeader } from '@/components/molecules/UserTypeHeader'

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
