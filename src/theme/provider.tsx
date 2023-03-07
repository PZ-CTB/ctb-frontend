import {
  createTheme,
  CssBaseline,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material'
import React from 'react'

import defaultThemeOptions from './defaults'
import GlobalStyles from './global'

type Props = {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme: Theme = createTheme(defaultThemeOptions)

  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
