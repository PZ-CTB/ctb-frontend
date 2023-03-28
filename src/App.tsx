import { RouterProvider } from 'react-router-dom';

import { BrowserRouter } from './router';

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
