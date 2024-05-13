import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './components/route';
import Home from './components/home';
import Protfulio from './components/protfulio';
import About from './components/about';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/protfulio",
        element: <Protfulio></Protfulio>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
