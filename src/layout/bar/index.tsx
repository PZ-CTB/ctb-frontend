import { AppBar, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import LayoutToolbar from './toolbar';

export const barWidth = 100;

const LayoutAppBar: React.FC = () => {
  return (
    <StyledBox>
      <StyledAppBar>
        <LayoutToolbar />
      </StyledAppBar>
    </StyledBox>
  );
};

export default LayoutAppBar;

const StyledAppBar = styled(AppBar).attrs(() => ({
  position: 'static',
}))`
  width: ${barWidth}vw;
`;

const StyledBox = styled(Box).attrs(() => ({
  sx: { flexGrow: 1 },
}))``;
