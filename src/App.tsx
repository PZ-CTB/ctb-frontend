import Providers from './providers'
import { BrowserRouter } from './router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <Providers>
      <RouterProvider router={BrowserRouter} />
    </Providers>
  )
}

export default App
