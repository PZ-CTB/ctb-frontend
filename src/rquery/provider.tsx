import queryClient from './client'
import React from 'react'
import { QueryClientProvider } from 'react-query'

type Props = {
  children: React.ReactNode
}

const RQueryClientProvider: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default RQueryClientProvider
