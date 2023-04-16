import { AppBar } from '@mui/material';
import React from 'react';

import LayoutToolbar from './toolbar';

const LayoutAppBar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <LayoutToolbar />
    </AppBar>
  );
};

export default LayoutAppBar;
