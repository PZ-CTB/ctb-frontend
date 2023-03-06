import { RouterProvider } from 'react-router-dom'

import Providers from './providers'
import { BrowserRouter } from './router'

function App() {
  return (
    <Providers>
      <RouterProvider router={BrowserRouter} />
    </Providers>
  )
}

export default App
