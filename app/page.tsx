import { navigationData } from '@/lib/navigationData'
import { FloatingSignupButton } from '@/components/ui/FloatingSignupButton'
import { SignupModal } from '@/components/ui/SignupModal'
import { SignupModalProvider } from '@/contexts/SignupModalContext'

export default function Home() {
  return (
    <SignupModalProvider>
      {navigationData.map(({ id, Component }) => {
        if (!Component) return null
        // Renders each section based on the navigation data order
        return <Component key={id} id={id} />
      })}
      <SignupModal />
      <FloatingSignupButton />
    </SignupModalProvider>
  )
}
