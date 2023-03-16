import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import List from '@mui/material/List';
import React from 'react';
import styled from 'styled-components';

import { LayoutDrawerNavConfig } from './config';
import LayoutDrawerNavItem from './item';
import { ListItemProps } from './types';

const LayoutDrawerNav: React.FC = () => {
  return (
    <>
      <List>
        {LayoutDrawerNavConfig.map((item: ListItemProps) => (
          <LayoutDrawerNavItem key={item.name} {...item} />
        ))}
      </List>
      <StyledList>
        <StyledListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledListItemButton>
      </StyledList>
    </>
  );
};

export default LayoutDrawerNav;

const StyledList = styled(List)`
  position: relative;
  bottom: '0';
  > .MuiButtonBase-root {
    bottom: 0px;
    position: 'absolute';
  }
`;
const StyledListItemButton = styled(ListItemButton)``;
