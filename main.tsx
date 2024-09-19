import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import About from './About.tsx';
import Products from './Products.tsx';
import './index.css'
import Contact from './components/Contact.tsx';
import ProjectPage from './[slug].tsx';


if (process.env.NODE_ENV === 'production') {
  console.log = () => { }
  console.error = () => { }
  console.debug = () => { }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact page={true} />,
  },
  {
    path: "/product/:slug",
    element: <ProjectPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
