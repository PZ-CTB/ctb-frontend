import LogoutIcon from '@mui/icons-material/Logout'
import { Drawer } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import styled from 'styled-components'

import LogoImg from '../../assets/CTB_Text.png'

import LayoutDrawerNav from './nav'

export const drawerWidth = 240

const LayoutDrawer: React.FC = () => {
  return (
    <StyledDrawer>
      <StyledDiv>
        <Logo />
        <LayoutDrawerNav />
      </StyledDiv>
      <LogoutButton />
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
const StyledDiv = styled.div`
  height: 100%;
`

const Logo = styled.div.attrs(() => ({
  background: LogoImg,
}))`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 49px;
  width: 238px;
`

const LogoutButton = styled(Button).attrs(() => ({
  variant: 'outlined',
  startIcon: <LogoutIcon />,
  children: 'Logout',
}))`
  bottom: 0;
  margin: 0.5rem;
`
