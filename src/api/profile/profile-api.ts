import client from '@/services/http/client'
import type { FetchUserProfile } from './types'

export const fetchUserProfile: FetchUserProfile = () => {
  return client.post('/profile', { userCount: 3, text: 'no_data' })
}
