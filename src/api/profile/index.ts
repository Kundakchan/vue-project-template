import type { ProfileApi } from './profile-api.interface'
import { fetchUserProfile } from './profile-api'
export type { FetchUserProfile } from './types'
export const profileApi: ProfileApi = {
  fetchUserProfile
}
