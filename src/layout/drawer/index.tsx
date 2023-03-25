import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/CTB_Text_black.png';
import { useAuthSignOutAndRedirect } from 'auth/hooks';

import LayoutDrawerNav from './nav';

export const drawerWidth = 240;

const LayoutDrawer: React.FC = () => {
  const signOutAndRedirect = useAuthSignOutAndRedirect();

  return (
    <StyledDrawer>
      <Logo />
      <LayoutDrawerNav />
      <LogoutButton onClick={signOutAndRedirect} />
    </StyledDrawer>
  );
};

export default LayoutDrawer;

const StyledDrawer = styled(Drawer).attrs(() => ({
  open: true,
  variant: 'permanent',
  anchor: 'left',
}))`
  > .MuiPaper-root {
    width: ${drawerWidth}px;
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Logo = styled.img.attrs(() => ({
  src: LogoImg,
}))`
  width: 100%;
  padding: 0.5rem 1rem;
`;

const LogoutButton = styled(Button).attrs(() => ({
  variant: 'outlined',
  startIcon: <LogoutIcon />,
  children: 'Logout',
}))`
  margin: auto 1rem 1rem 1rem;
`;
