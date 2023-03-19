import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ListItemProps } from './types';

const LayoutDrawerNavItem: React.FC<ListItemProps> = ({ name, path, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={StyledNavLink} to={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default LayoutDrawerNavItem;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.palette.primary.main};

    > .MuiListItemIcon-root {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
