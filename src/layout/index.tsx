import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { useIsAuthenticated } from 'auth/hooks';

import ProtectedLayout from './protected';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

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
