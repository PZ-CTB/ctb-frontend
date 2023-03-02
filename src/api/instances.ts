import { request as requestInterceptors } from './interceptors'
import axios from 'axios'

// default instance with auth

export const axiosDefault = (function () {
  const instance = createInstance()

  instance.interceptors.request.use(...requestInterceptors.addAuthHeader)

  return instance
})()

export default axiosDefault

// instance without auth

export const axiosWithoutAuth = createInstance()

// creator with shared defaults

function createInstance() {
  return axios.create()
}
