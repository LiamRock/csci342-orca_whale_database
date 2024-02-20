import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Whales from './components/Whales/Whales'
import NotFoundPage from './components/NotFound/NotFoundPage'
import HomePage from './components/HomePage/main/HomePage'
import AboutUs from './components/AboutUs/AboutUs'
import OrcaBio from './components/WhaleBios/OrcaBio/OrcaBio'


const router = createBrowserRouter([
  {path:"/",element:<App />, children:[ // Replace App with hompage
    {index:true, element: <HomePage />},
    {path:"whales", element: <Whales />},
    {path:"whales/orcas", element: <OrcaBio />},
    {path:"aboutus", element: <AboutUs />},
    {path:"*", element: <NotFoundPage />}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
