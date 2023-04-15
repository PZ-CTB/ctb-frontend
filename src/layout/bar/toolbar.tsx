import { AccountCircle } from '@mui/icons-material';
import { IconButton, Toolbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import LayoutMenu from './menu';

const LayoutToolbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <StyledToolbar>
      <StyledIconButton onClick={handleMenu} />
      <LayoutMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </StyledToolbar>
  );
};

export default LayoutToolbar;

const StyledToolbar = styled(Toolbar)`
  justify-content: flex-end;
`;

const StyledIconButton = styled(IconButton).attrs(() => ({
  size: 'large',
  color: 'inherit',
  children: <StyledAccountIcon />,
}))``;

const StyledAccountIcon = styled(AccountCircle).attrs(() => ({
  fontSize: 'large',
}))``;
