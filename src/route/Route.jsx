import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductDetails from "../pages/product-details/ProductDetails";

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
          element: <Products></Products>,
          loader: () => fetch(`https://dummyjson.com/products`)
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/product/:id',
          element: <ProductDetails></ProductDetails>
        }
      ]
    }
  ])

  export default router;