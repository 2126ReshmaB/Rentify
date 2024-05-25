import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from '../components/register';
import App from './App.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'register',
    element: <Register />
  }
])

export default router