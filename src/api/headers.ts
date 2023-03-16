import { AxiosRequestConfig } from 'axios';

import { getPersistentAuthData } from 'auth/localStorage';

export const getAxiosAuthorizationHeader =
  (): AxiosRequestConfig['headers'] => {
    const data = getPersistentAuthData();

    if (!data) return undefined;

    return {
      Authorization: `Token ${data.token}`,
    };
  };
