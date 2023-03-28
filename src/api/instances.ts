import axios from 'axios';

import { getAxiosAuthorizationHeader } from './headers';

// default instance with auth

export const axiosDefault = (function () {
  const instance = createInstance();

  instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['x-access-token'] = getAxiosAuthorizationHeader();
    return config;
  });

  return instance;
})();

export default axiosDefault;

// instance without auth

export const axiosWithoutAuth = createInstance();

// creator with shared defaults

function createInstance() {
  return axios.create();
}
