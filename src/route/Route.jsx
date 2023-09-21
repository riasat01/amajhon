import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    }
  ])

  export default router;