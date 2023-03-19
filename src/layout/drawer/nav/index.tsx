import List from '@mui/material/List';
import React from 'react';

import { LayoutDrawerNavConfig } from './config';
import LayoutDrawerNavItem from './item';
import { ListItemProps } from './types';

const LayoutDrawerNav: React.FC = () => {
  return (
    <List>
      {LayoutDrawerNavConfig.map((item: ListItemProps) => (
        <LayoutDrawerNavItem key={item.name} {...item} />
      ))}
    </List>
  );
};

export default LayoutDrawerNav;
