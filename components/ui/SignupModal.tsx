'use client'

import { X, Mail, Linkedin, Github, Award, CircleStar } from 'lucide-react'
import { cn, getUserSegmentLabel } from '@/lib/utils'
import { strings } from '@/lib/strings'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useSignupForm } from '@/hooks/useSignUpForm'
import { Button } from './Button'
import { Input } from './Input'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from '@radix-ui/react-dialog'
import { DialogHeader } from './Dialog'

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
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogPortal>
        <DialogOverlay className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        <DialogContent className='fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg shadow-lg p-6 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'>
          <DialogHeader className='relative mb-6'>
            <button
              type='button'
              onClick={closeModal}
              className='absolute right-[-8px] top-[-8px] p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors z-10 cursor-pointer'
              aria-label={strings.signupModal.accessibility.closeModal}
              tabIndex={0}
            >
              <X className='h-4 w-4' />
            </button>

            <VisuallyHidden>
              <DialogTitle className='text-2xl font-bold text-slate-900 text-center mb-2 pr-12'>
                {strings.signupModal.title}
              </DialogTitle>
            </VisuallyHidden>
            {userType && (
              <div>
                <div className='flex items-center justify-center gap-3 mb-3'>
                  <div
                    className={cn(
                      'p-2 rounded-lg shadow-sm',
                      userType === 'member' ? 'bg-emerald-600' : 'bg-blue-600'
                    )}
                  >
                    {userType === 'member' ? (
                      <CircleStar
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    ) : (
                      <Award
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    )}
                  </div>
                </div>
                <div className='text-center'>
                  <p
                    className={cn(
                      'text-xl font-semibold bg-white px-4 py-2 rounded-lg inline-block shadow-sm',
                      userType === 'member'
                        ? 'text-emerald-600 border border-emerald-100'
                        : 'text-blue-600 border border-blue-100'
                    )}
                  >
                    {getUserSegmentLabel(userType)}
                  </p>
                </div>
              </div>
            )}
          </DialogHeader>

          <form
            onSubmit={handleSubmit}
            className='space-y-4'
            aria-label='Signup form'
            aria-describedby='signup-form-description'
          >
            <div className='space-y-2'>
              <label htmlFor='email' className='sr-only'>
                {strings.signupModal.form.email.label}
              </label>
              <div className='relative'>
                <Mail
                  className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400'
                  aria-hidden='true'
                />
                <Input
                  id='email'
                  type='email'
                  placeholder={strings.signupModal.form.email.placeholder}
                  value={formData.email}
                  onChange={handleEmailChange}
                  required
                  disabled={isSubmitting}
                  className={cn(
                    'h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 pl-10',
                    errors.email &&
                      'border-destructive focus:border-destructive focus:ring-destructive/20'
                  )}
                  aria-describedby={
                    strings.signupModal.accessibility.emailError
                  }
                  aria-invalid={!!errors.email}
                  tabIndex={0}
                />
              </div>
              {errors.email && (
                <p
                  id='email-error'
                  className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
                  role='alert'
                  aria-live='polite'
                >
                  <span
                    className='text-destructive font-medium text-xs mt-0.5'
                    aria-hidden='true'
                  >
                    ⚠
                  </span>
                  <span className='leading-relaxed'>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Honeypot field - hidden from users but visible to bots */}
            <div
              className='absolute left-[-9999px] opacity-0 pointer-events-none'
              aria-hidden='true'
            >
              <label htmlFor='website'>
                {strings.signupModal.form.website.label}
              </label>
              <Input
                id='website'
                name='website'
                type='text'
                placeholder={strings.signupModal.form.website.placeholder}
                value={honeypotValue}
                onChange={handleHoneypotChange}
                tabIndex={-1}
                autoComplete='off'
                aria-hidden='true'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='linkedin' className='sr-only'>
                {strings.signupModal.form.linkedin.label}
              </label>
              <div className='relative'>
                <Linkedin
                  className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400'
                  aria-hidden='true'
                />
                <Input
                  id='linkedin'
                  type='url'
                  placeholder={strings.signupModal.form.linkedin.placeholder}
                  value={formData.linkedin}
                  onChange={handleLinkedInChange}
                  required
                  disabled={isSubmitting}
                  className={cn(
                    'h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 pl-10',
                    errors.linkedin &&
                      'border-destructive focus:border-destructive focus:ring-destructive/20'
                  )}
                  aria-describedby={
                    strings.signupModal.accessibility.linkedinError
                  }
                  aria-invalid={!!errors.linkedin}
                  tabIndex={0}
                />
              </div>
              {errors.linkedin && (
                <p
                  id='linkedin-error'
                  className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
                  role='alert'
                  aria-live='polite'
                >
                  <span
                    className='text-destructive font-medium text-xs mt-0.5'
                    aria-hidden='true'
                  >
                    ⚠
                  </span>
                  <span className='leading-relaxed'>{errors.linkedin}</span>
                </p>
              )}
            </div>

            <div className='space-y-2'>
              <label htmlFor='github' className='sr-only'>
                {strings.signupModal.form.github.label}
              </label>
              <div className='relative'>
                <Github
                  className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400'
                  aria-hidden='true'
                />
                <Input
                  id='github'
                  type='url'
                  placeholder={strings.signupModal.form.github.placeholder}
                  value={formData.github}
                  onChange={handleGitHubChange}
                  required
                  disabled={isSubmitting}
                  className={cn(
                    'h-12 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 pl-10',
                    errors.github &&
                      'border-destructive focus:border-destructive focus:ring-destructive/20'
                  )}
                  aria-describedby={
                    strings.signupModal.accessibility.githubError
                  }
                  aria-invalid={!!errors.github}
                  tabIndex={0}
                />
              </div>
              {errors.github && (
                <p
                  id='github-error'
                  className='text-destructive text-sm mt-2 flex items-start gap-2 px-1'
                  role='alert'
                  aria-live='polite'
                >
                  <span
                    className='text-destructive font-medium text-xs mt-0.5'
                    aria-hidden='true'
                  >
                    ⚠
                  </span>
                  <span className='leading-relaxed'>{errors.github}</span>
                </p>
              )}
            </div>

            <Button
              type='submit'
              disabled={
                isSubmitting ||
                !formData.email ||
                !formData.linkedin ||
                !formData.github
              }
              className='w-full h-12 text-base btn-primary disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
              aria-label={
                isSubmitting
                  ? strings.signupModal.submitButton.ariaLabel.submitting
                  : strings.signupModal.submitButton.ariaLabel.idle
              }
              tabIndex={0}
            >
              {isSubmitting ? (
                <>
                  <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2' />
                  {strings.signupModal.submitButton.submitting}
                </>
              ) : (
                strings.signupModal.submitButton.idle
              )}
            </Button>

            {submitStatus === 'success' && (
              <section
                className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'
                aria-live='polite'
              >
                <p className='text-green-800 text-sm font-medium flex items-start gap-2'>
                  <span className='text-green-600' aria-hidden='true'>
                    {strings.signupModal.status.success.icon}
                  </span>
                  <span>{strings.signupModal.status.success.message}</span>
                </p>
              </section>
            )}

            {submitStatus === 'error' && (
              <div
                className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'
                role='alert'
                aria-live='assertive'
              >
                <p className='text-red-800 text-sm font-medium flex items-start gap-2'>
                  <span className='text-red-600' aria-hidden='true'>
                    {strings.signupModal.status.error.icon}
                  </span>
                  <span>
                    {errors.submit || strings.signupModal.status.error.message}
                  </span>
                </p>
              </div>
            )}
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
