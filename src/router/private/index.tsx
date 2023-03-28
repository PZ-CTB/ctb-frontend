import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useIsAuthenticated } from 'auth/hooks';
import Routes from 'routes';

type Props = {
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) return children;

  return <Navigate to={Routes.Login()} state={{ from: location }} replace />;
};

export default ProtectedRoute;
