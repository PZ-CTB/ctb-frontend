import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthSignOutAndRedirect } from 'auth/hooks';
import Routes from 'routes';

const LayoutToolbar: React.FC = () => {
  const signOutAndRedirect = useAuthSignOutAndRedirect();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledToolbar>
      <StyledIconButton onClick={handleMenu} />
      <StyledMenu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to={Routes.Profile()}>
          Profile
        </MenuItem>
        <MenuItem onClick={signOutAndRedirect}>Logout</MenuItem>
      </StyledMenu>
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
  children: <AccountCircle />,
}))``;

const StyledMenu = styled(Menu).attrs(() => ({
  id: 'menu-appbar',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
}))``;
