import { Drawer } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/CTB_Text_black.png';

import LayoutDrawerNav from './nav';

export const drawerWidth = 240;

const LayoutDrawer: React.FC = () => {
  return (
    <StyledDrawer>
      <Logo />
      <LayoutDrawerNav />
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
    position: sticky;
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
