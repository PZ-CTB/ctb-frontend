import { AuthData } from './types';

const AUTH_TOKEN = 'ctb-auth-token';

export const setPersistentAuthData = (data: AuthData) => {
  localStorage.setItem(AUTH_TOKEN, data.token);
};

export const getPersistentAuthData = (): AuthData | undefined => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) return;

  return {
    token,
  };
};

export const removePersistentAuthData = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
