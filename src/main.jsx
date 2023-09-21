import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route'
// import MainLayout from './layouts/MainLayout.jsx'
// import Home from './pages/home/Home.jsx'
// import About from './pages/about/About.jsx'
// import Products from './pages/products/Products.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
