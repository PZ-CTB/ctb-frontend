import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
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
    <Toolbar>
      <StyledTypography />
      <div>
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
      </div>
    </Toolbar>
  );
};

export default LayoutToolbar;

const StyledTypography = styled(Typography).attrs(() => ({
  variant: 'h6',
  component: 'div',
  sx: { flexGrow: 1 },
  children: 'Crypto Traiding Bot',
}))``;

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
