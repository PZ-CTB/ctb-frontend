import { createBrowserRouter } from 'react-router-dom'

import { Routes } from 'routes'
import JakubSandboxPage from 'sandbox/jakub'
import MirekSandboxPage from 'sandbox/mirek'
import WiktorSandboxPage from 'sandbox/wiktor'

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.SandboxUrl('mirek'),
    element: <MirekSandboxPage />,
  },
  {
    path: Routes.SandboxUrl('jakub'),
    element: <JakubSandboxPage />,
  },
  {
    path: Routes.SandboxUrl('wiktor'),
    element: <WiktorSandboxPage />,
  },
])
