// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import Routers from './routes/routes';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <  RouterProvider router={ Routers } />
  </StrictMode>
);