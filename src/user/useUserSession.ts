import { useQuery } from 'react-query';

import { getUserSession, USER_SESSION_API_PATH } from 'auth/api';
import { useAuthSignOutAndRedirect, useIsAuthenticated } from 'auth/hooks';
import { RQUERY_NOREFETCH_OPTIONS } from 'rquery';

export const useUserSession = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOutAndRedirect = useAuthSignOutAndRedirect();

  return useQuery(USER_SESSION_API_PATH, getUserSession, {
    ...RQUERY_NOREFETCH_OPTIONS,
    refetchInterval: 5 * 60 * 1000,
    enabled: isAuthenticated, // disable fetch when not isAuthenticated (e.g., login page)
    retry: false, // do not retry if error (401)
    onError: () => {
      signOutAndRedirect();
    },
  });
};
