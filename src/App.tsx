import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import PageLayout from '~layouts/PageLayout';
import AuthRoute from '~routes/AuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <AuthRoute />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
