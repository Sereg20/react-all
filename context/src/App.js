import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage, { loader as fetchOrders } from './pages/CartPage';
import Root from './pages/Root';

const App = () => {

  const router = createBrowserRouter([
    { path: '/', element: <Root />, children: [
      { index: true, element: <HomePage />},
      { path: 'cart', element: <CartPage />, loader: fetchOrders }
    ]},
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
