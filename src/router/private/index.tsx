import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Routes from 'routes';

type Props = {
  children: React.ReactElement;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = true;

  if (isAuthenticated) return children;

  return <Navigate to={Routes.LoginUrl()} state={{ from: location }} replace />;
};

export default ProtectedRoute;
