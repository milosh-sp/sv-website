import { VerifierWaitlistForm } from '@/components/organisms/VerifierWaitlistForm'
import { VerifierFormProvider } from '@/context/VerifierFormContext'

export default function VerifierPage() {
  return (
    <VerifierFormProvider>
      <VerifierWaitlistForm />
    </VerifierFormProvider>
  )
}
