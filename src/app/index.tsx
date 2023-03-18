import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import LayoutDrawer, { drawerWidth } from 'layout/drawer'
import Routes from 'routes'
import useRedirectOnMount from 'utils/useRedirectOnMount'

const AppPage: React.FC = () => {
  useRedirectOnMount(Routes.DashboardUrl())

  return (
    <Layout>
      <LayoutDrawer />
      <Main>
        <Outlet />
      </Main>
    </Layout>
  )
}

export default AppPage

const Layout = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
`
const Main = styled.main`
  padding: 1.5rem 1.5rem 1.5rem calc(${drawerWidth}px + 1.5rem);
  width: 100%;
`
