import { getAxiosAuthorizationHeader } from './headers'
import { AxiosInstance } from 'axios'
import produce from 'immer'

// request

export const request: Readonly<
  Record<string, Parameters<AxiosInstance['interceptors']['request']['use']>>
> = {
  addAuthHeader: [
    (config) =>
      produce(config, (draftConfig) => {
        Object.assign(draftConfig.headers, getAxiosAuthorizationHeader())
      }),
  ],
}
