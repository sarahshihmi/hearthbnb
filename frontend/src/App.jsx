import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SpotsList from './components/Spot/SpotList/SpotList';
import SpotDetails from './components/Spot/SpotDetails/SpotDetails';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';
import CreateSpotForm from './components/CreateSpotForm';
import ManageSpots from './components/ManageSpots';
import UpdateSpotForm from './components/UpdateSpotForm';
import './styles.css';



function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const App = () => {
    const router = createBrowserRouter([
      {
        element: <Layout />,
        children:[
          {
            path: '/',
            element: <SpotsList />
          },
          {
            path: '/spots/new',
            element: <CreateSpotForm />
          },
          {
            path: '/spots/:id',
            element: <SpotDetails />
          },
          {
            path: '/spots/current',
            element: <ManageSpots />
          },
          {
            path: '/spots/:spotId/edit',
            element: <UpdateSpotForm />
          },
        ]
      }
        
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;