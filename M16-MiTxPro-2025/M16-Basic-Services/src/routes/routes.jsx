import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default Routers;