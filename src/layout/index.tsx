import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useIsAuthenticated } from 'auth/hooks';
import Routes from 'routes';

import ProtectedLayout from './protected';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate(Routes.Login(), { replace: true });
  }, [isAuthenticated]);

  return (
    <Body>
      {isAuthenticated ? (
        <ProtectedLayout>{children}</ProtectedLayout>
      ) : (
        children
      )}
    </Body>
  );
};

export default Layout;

const Body = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  width: 100%;
`;
