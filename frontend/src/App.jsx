//import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import LoginFormModal from './components/LoginFormModal';
//import SignupFormModal from './components/SignupFormModal';
import SpotsList from './components/Spot/SpotList/SpotList';
import Navigation from './components/Navigation';
import * as sessionActions from './store/session';


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
          }
        ]
      }
        
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;