import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import PageLayout from '~layouts/PageLayout';
import AuthRoute, { AuthRouteLoader } from '~routes/AuthRoute';
import HomeRoute, { HomeRouteLoader } from '~routes/HomeRoute';
import { IndexRouteLoader } from '~routes/IndexRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        loader: IndexRouteLoader,
      },
      {
        path: '/auth',
        element: <AuthRoute />,
        loader: AuthRouteLoader,
      },
      {
        path: '/home',
        element: <HomeRoute />,
        loader: HomeRouteLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
