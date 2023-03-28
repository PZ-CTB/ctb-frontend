import { useQuery } from 'react-query';

import { useAuthSignOutAndRedirect, useIsAuthenticated } from '../auth/hooks';
import { RQUERY_NOREFETCH_OPTIONS } from '../rquery';

import { API_ROOT_PATH, getUserSession } from './api';

export const useUserSession = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOutAndRedirect = useAuthSignOutAndRedirect();

  return useQuery(API_ROOT_PATH, getUserSession, {
    ...RQUERY_NOREFETCH_OPTIONS,
    refetchInterval: 5 * 60 * 1000,
    enabled: isAuthenticated, // disable fetch when not isAuthenticated (e.g., login page)
    retry: false, // do not retry if error (401)
    onError: () => {
      if (isAuthenticated) {
        signOutAndRedirect();
      }
    },
  });
};
