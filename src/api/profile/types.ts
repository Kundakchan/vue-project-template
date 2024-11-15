export interface ProfileResponse {
  firstName: string
  lastName: string
  middleName: string
  phone: string
  id: number
  email: string
  isAdmin: boolean
  applicationStatus: string
  createdAt: string
  updatedAt: string
}

export interface FetchUserProfile {
  (): Promise<ProfileResponse>
}
