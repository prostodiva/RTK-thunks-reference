import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';
import Root from './root/Root';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyTripPage from './pages/MyTripPage.tsx';
import London from './pages/London.tsx';
import Berlin from './pages/Berlin.tsx';
import Paris from './pages/Paris.tsx';
import Custom from './pages/Custom.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/home',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/trip',
        element: <MyTripPage />
      },
      {
        path: '/london',
        element: <London />
      },
      {
        path: '/berlin',
        element: <Berlin />
      },
      {
        path: '/paris',
        element: <Paris />
      },
      {
        path: '/custom',
        element: <Custom />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
