import { getPersistentAuthData } from 'auth/localStorage'
import { AxiosRequestConfig } from 'axios'

export const getAxiosAuthorizationHeader =
  (): AxiosRequestConfig['headers'] => {
    const data = getPersistentAuthData()

    if (!data) return undefined

    return {
      Authorization: `Token ${data.token}`,
    }
  }
