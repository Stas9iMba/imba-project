import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import PageLayout from '~layouts/PageLayout';
import AuthRoute from '~routes/AuthRoute';
import HomeRoute from '~routes/HomeRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <AuthRoute />,
      },
      {
        path: '/home',
        element: <HomeRoute />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
