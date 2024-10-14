import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

const App = () => {
    const router = createBrowserRouter([
        {
          path: '/',
          element: <h1>Welcome!</h1>
        },
        {
          path: '/login',
          element: <LoginFormPage />
        }
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default App;