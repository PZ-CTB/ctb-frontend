import { createBrowserRouter } from 'react-router-dom'

import BasePage from 'pages/base'
import { Routes } from 'routes'

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.BaseUrl(),
    element: <BasePage />,
  },
])
