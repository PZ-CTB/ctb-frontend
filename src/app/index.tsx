import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LayoutDrawer, { drawerWidth } from 'layout/drawer';
import useRemoveTrailingSlash from 'router/useRemoveTrailingSlash';
import Routes from 'routes';
import useRedirectOnMount from 'utils/useRedirectOnMount';

const AppPage: React.FC = () => {
  const location = useLocation();
  useRemoveTrailingSlash();
  const redirectCondition = location.pathname === Routes.AppUrl();
  console.log(location.pathname);
  useRedirectOnMount(Routes.DashboardUrl(), redirectCondition);

  return (
    <Layout>
      <LayoutDrawer />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default AppPage;

const Layout = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
`;
const Main = styled.main`
  padding: 1.5rem 1.5rem 1.5rem calc(${drawerWidth}px + 1.5rem);
  width: 100%;
`;
