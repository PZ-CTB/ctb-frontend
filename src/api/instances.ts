import axios from 'axios';

import { getAxiosAuthorizationHeader } from './headers';

// default instance with auth

export const axiosDefault = (function () {
  const instance = axios.create();

  instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['x-access-token'] = getAxiosAuthorizationHeader();
    return config;
  });

  return instance;
})();

export default axiosDefault;
