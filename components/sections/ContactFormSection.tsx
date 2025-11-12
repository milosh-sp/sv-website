'use client'

import { ContactForm } from '@/components/organisms/ContactForm'
import { useContactForm } from '@/hooks/useContactForm'
import { strings } from '@/lib/strings'
import type { SectionProps } from '@/types/Sections.types'
import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'

export function ContactPageContent({ id }: SectionProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    honeypotValue,
    handleEmailChange,
    handleNameChange,
    handleMessageChange,
    handleHoneypotChange,
    handleSubmit,
  } = useContactForm()

  return (
    <section
      id={id}
      className='pt-30 pb-15 md:pb-[6.90rem] px-5 bg-white'
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
        onNameChange={handleNameChange}
        onMessageChange={handleMessageChange}
        onHoneypotChange={handleHoneypotChange}
        onSubmit={handleSubmit}
      />
    </section>
  )
}
