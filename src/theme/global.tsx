import { GlobalStyles as MuiGlobalStyles, useTheme } from '@mui/material'
import React from 'react'

const GlobalStyles: React.FC = () => {
  const theme = useTheme()

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
      }}
    />
  )
}

export default GlobalStyles
