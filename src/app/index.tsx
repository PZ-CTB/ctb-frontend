import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LayoutAppBar from 'layout/bar';
import LayoutDrawer from 'layout/drawer';
import useRemoveTrailingSlash from 'router/useRemoveTrailingSlash';
import Routes from 'routes';
import useRedirectOnMount from 'utils/useRedirectOnMount';

const AppPage: React.FC = () => {
  useRemoveTrailingSlash();

  const location = useLocation();
  const redirectCondition = location.pathname === Routes.App();
  useRedirectOnMount(Routes.Dashboard(), redirectCondition);

  return (
    <Layout>
      <LayoutDrawer />

      <Container>
        <LayoutAppBar />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </Layout>
  );
};

export default AppPage;

const Layout = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  padding: 1.5rem;
  width: 100%;
`;
