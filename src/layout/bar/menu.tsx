import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthSignOutAndRedirect } from 'auth/hooks';
import Routes from 'routes';

type Props = {
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
};

const LayoutMenu: React.FC<Props> = ({ anchorEl, setAnchorEl }) => {
  const signOutAndRedirect = useAuthSignOutAndRedirect();

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to={Routes.Profile()}>
        Profile
      </MenuItem>
      <MenuItem onClick={signOutAndRedirect}>Logout</MenuItem>
    </StyledMenu>
  );
};

export default LayoutMenu;

const StyledMenu = styled(Menu).attrs(() => ({
  id: 'menu-appbar',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  keepMounted: true,
}))``;
