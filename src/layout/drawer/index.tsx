import { Drawer } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

import LayoutDrawerNav from './nav'

export const drawerWidth = 240

const LayoutDrawer: React.FC = () => {
  return (
    <StyledDrawer>
      <LayoutDrawerNav />
    </StyledDrawer>
  )
}

export default LayoutDrawer

const StyledDrawer = styled(Drawer).attrs(() => ({
  open: true,
  variant: 'permanent',
  anchor: 'left',
}))`
  > .MuiPaper-root {
    width: ${drawerWidth}px;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`
