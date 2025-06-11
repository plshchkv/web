import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/root.css'
import routes from './routes'
import { RouterProvider } from "react-router";
import './i18n'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
