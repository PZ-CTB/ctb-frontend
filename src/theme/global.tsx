import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material';
import React from 'react';

const GlobalStyles: React.FC = () => {
  const theme = useTheme();

  return (
    <MuiGlobalStyles
      styles={{
        a: {
          color: theme.palette.primary.main,

          '&, &:hover': {
            textDecoration: 'none',
          },
        },

        body: {
          // avoid content shift when scrollbar appears
          overflowY: 'scroll',
        },

        input: {
          '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },

          '&[type=number]': {
            '-moz-appearance': 'textfield',
          },
        },
      }}
    />
  );
};

export default GlobalStyles;
