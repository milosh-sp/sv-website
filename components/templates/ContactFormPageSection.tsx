'use client'

import { ContactForm } from '@/components/organisms/ContactForm'
import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { useContactForm } from '@/hooks/useContactForm'
import { strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'

export function ContactFormPageSection({ id }: SectionProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    honeypotValue,
    handleEmailChange,
    handleContactNameChange,
    handleMessageChange,
    handleHoneypotChange,
    handleSubmit,
  } = useContactForm()

  return (
    <SectionWrapper
      id={id}
      className='pb-15 md:pb-[6.90rem] px-5 bg-white'
      aria-labelledby='contact-heading'
    >
      <div className='container-narrow'>
        <HeaderAndDescription
          heading={strings.contactPage.heading}
          description={strings.contactPage.description}
          className='mb-12 text-center'
        />
      </div>
      <ContactForm
        formData={formData}
        isSubmitting={isSubmitting}
        errors={errors}
        submitStatus={submitStatus}
        honeypotValue={honeypotValue}
        onEmailChange={handleEmailChange}
        onContactNameChange={handleContactNameChange}
        onMessageChange={handleMessageChange}
        onHoneypotChange={handleHoneypotChange}
        onSubmit={handleSubmit}
      />
    </SectionWrapper>
  )
}
