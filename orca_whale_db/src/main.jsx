import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Whales from './components/Whales/Whales'
import NotFoundPage from './components/NotFound/NotFoundPage'
import Home from './components/Home/Home.jsx'
import OrcaBio from './components/WhaleBios/OrcaBio/OrcaBio.jsx'
import GrayBio from './components/WhaleBios/GrayBio/GrayBio.jsx'
import HumpbackBio from './components/WhaleBios/HumpbackBio/HumpbackBio.jsx'
import Account from './components/Account/Account.jsx'


const router = createBrowserRouter([
  {path:"/", element:<App/>, children: [ // Replace App with homepage
    {index:true, element: <Home/>},
    {path:"*", element: <NotFoundPage/>},
    {path:"/whales", element: <Whales/>},
    {path:"/whales/orcas", element: <OrcaBio/>},
    {path:"/whales/grays", element: <GrayBio/>},
    {path:"/whales/humpbacks", element: <HumpbackBio/>},
    {path:"/account", element: <Account/>},
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
