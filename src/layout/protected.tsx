import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Routes from 'routes';
import useRedirectOnMountIfPathname from 'utils/useRedirectOnMountIfPathname';
import useRemoveTrailingSlash from 'utils/useRemoveTrailingSlash';

import AppBar from './appBar';
import Drawer from './drawer';

type Props = {
  children: ReactNode;
};

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  useRemoveTrailingSlash();
  useRedirectOnMountIfPathname(Routes.Dashboard(), Routes.Home());

  return (
    <>
      <Drawer />

      <Container>
        <AppBar />
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default ProtectedLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  padding: 1.5rem;
  width: 100%;
`;
