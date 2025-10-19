import type { UserType } from './form-data.types'

export interface SignupModalContextType {
  isOpen: boolean
  userType: UserType
  openModal: (userType?: UserType) => void
  closeModal: () => void
  toggleModal: () => void
}
