import React from 'react'
import ThemeProvider from 'theme/provider'

type Props = {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
