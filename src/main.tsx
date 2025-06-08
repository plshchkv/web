import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/root.css'
import MainPage from './pages/MainPage'
import Schedule from './pages/Schedule'
import NotFound from './pages/NotFound'

import './i18n'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/Расписание",
    element: <Schedule/>
  },
  {
    path: "/Schedule",
    element: <Schedule/>
  },
  {
    path: "/*",
    element: <NotFound/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
