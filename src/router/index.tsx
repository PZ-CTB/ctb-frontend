import BasePage from 'pages/base'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from 'routes'

export const BrowserRouter = createBrowserRouter([
  {
    path: Routes.BaseUrl(),
    element: <BasePage />,
  },
])
