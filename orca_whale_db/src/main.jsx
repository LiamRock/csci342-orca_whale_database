import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Whales from './components/Whales/Whales'
import NotFoundPage from './components/NotFound/NotFoundPage'
import OrcaBio from './components/WhaleBios/OrcaBio/OrcaBio.jsx'
import GrayBio from './components/WhaleBios/GrayBio/GrayBio.jsx'
import HumpbackBio from './components/WhaleBios/HumpbackBio/HumpbackBio.jsx'
import Account from './components/Account/Account.jsx'
import HomePage from './components/HomePage/main/HomePage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Login from './components/Forms/Login.jsx'
import Signup from './components/Forms/Signup.jsx'
import store from './store/store.jsx';
import {Provider} from 'react-redux';

const router = createBrowserRouter([
  {path:"/", element:<App/>, children: [ // Replace App with homepage
    {index:true, element: <HomePage/>},
    {path:"*", element: <NotFoundPage/>},
    {path:"/whales", element: <Whales/>},
    {path:"/whales/orcas", element: <OrcaBio/>},
    {path:"/whales/grays", element: <GrayBio/>},
    {path:"/whales/humpbacks", element: <HumpbackBio/>},
    {path:"/account", element: <Account/>},
    {path:"/aboutus", element: <AboutUs/>},
    {path:"/login", element: <Login/>},
    {path:"/signup", element: <Signup/>},
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
