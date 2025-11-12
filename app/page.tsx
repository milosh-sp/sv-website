import { navigationData } from '@/lib/navigationData'
import { FloatingSignupButton } from '@/components/organisms/FloatingSignupButton'
import { SignupModal } from '@/components/organisms/SignupModal'
import { SignupModalProvider } from '@/context/SignupModalContext'

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
