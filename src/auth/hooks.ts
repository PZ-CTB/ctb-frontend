import { useNavigate } from 'react-router-dom';

import Routes from 'routes';

import { useAuthContext } from './context';

export const useIsAuthenticated = () => !!useAuthContext().data;

export const useAuthSignOutAndRedirect = () => {
  const navigate = useNavigate();

  const { signOut } = useAuthContext();

  return () => {
    signOut();

    // redirect here to avoid auto-redirect with location.from
    navigate(Routes.Login());
  };
};
