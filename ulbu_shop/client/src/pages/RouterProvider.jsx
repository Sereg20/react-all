import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root';
import Error from './Error';
import Shop from './Shop';
import DevicePage from './DevicePage';
import Auth, {action as authAction} from './Auth';
import Registration, {action as registrationAction} from './Registration';
import Admin from './Admin';
import Basket from './Basket';

const router = createBrowserRouter([
    { path: '/', element: <Root />, errorElement: <Error />, children: [
      { index: true, element: <Shop /> },
      { path: 'device/:id', element: <DevicePage /> },
      { path: 'basket', element: <Basket /> },
      { path: 'auth', element: <Auth />, action: authAction },
      { path: 'registration', element: <Registration />, action: registrationAction },
      { path: 'admin', element: <Admin /> }
    ]}
]);

const RouteProvider = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default RouteProvider;

