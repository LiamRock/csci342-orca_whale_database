import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Whales from './components/Whales/Whales'
import NotFoundPage from './components/NotFound/NotFoundPage'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter([
  {path:"/",element:<App />, children:[ // Replace App with hompage
    {index:true, element: <Home />},
    {path:"whales", element: <Whales />},
    {path:"*", element: <NotFoundPage />}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
