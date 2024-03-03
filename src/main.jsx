import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing Bootstrap into app
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/App.css'

// Importing the individual endpoints from 'pages' dirctor
import App from './App';
import Error from './pages/Error';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import FAQ from './pages/FAQ';

// Accessible routes defined and specified which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Pricing',
        element: <Pricing />,
      },
      {
        path: '/FAQ',
        element: <FAQ />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
