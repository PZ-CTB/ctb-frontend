import React from 'react'

import RQueryClientProvider from 'rquery/provider'
import ThemeProvider from 'theme/provider'

type Props = {
  children: React.ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <RQueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RQueryClientProvider>
  )
}

export default Providers
