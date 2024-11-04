import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Homepage/Home.jsx'
import Shop from './Shop/Shop.jsx'
import Checkout from './Checkout/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shop/checkout',
    element: <Checkout />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
