import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import ProtectedRoute from './util/ProtectedRoute.jsx';

import Whales from './components/Whales/Whales'
import OrcaBio from './components/Whales/WhaleBios/OrcaBio/OrcaBio.jsx'
import BlueBio from './components/Whales/WhaleBios/BlueBio/BlueBio'
import HumpbackBio from './components/Whales/WhaleBios/HumpbackBio/HumpbackBio.jsx'
import MinkeBio from './components/Whales/WhaleBios/MinkeBio/MinkeBio'
import FinBio from './components/Whales/WhaleBios/FinBio/FinBio'
import GrayBio from './components/Whales/WhaleBios/GrayBio/GrayBio.jsx'
import Account from './components/Account/Account.jsx'
import HomePage from './components/HomePage/main/HomePage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Login from './components/Forms/Login.jsx'
import Signup from './components/Forms/Signup.jsx'
import ForgotPassword from './components/Forms/ForgetPassword.jsx'
import NotFoundPage from './components/NotFound/NotFoundPage'
import PostPage from './components/PostPage/PostPage.jsx';import ResidentBio from './components/Whales/WhaleBios/OrcaBio/ResidentBio/ResidentBio.jsx'
import TransientBio from './components/Whales/WhaleBios/OrcaBio/TransientBio/TransientBio.jsx'
import OffshoreBio from './components/Whales/WhaleBios/OrcaBio/OffshoreBio/OffshoreBio.jsx'
// import ProtectedRoute from './util/ProtectedRoute.jsx'

import './index.css'


const router = createBrowserRouter([
  {path:"/", element:<App/>, children: [ // Replace App with homepage
    {index:true, element: <HomePage/>},
    {path:"*", element: <NotFoundPage/>},
    {path:"/whales", element: <Whales/>},
    {path:"/whales/orcas", element: <OrcaBio/>},
    {path:"/whales/orcas/residents", element: <ResidentBio/>},
    {path:"/whales/orcas/transients", element: <TransientBio/>},
    {path:"/whales/orcas/offshore", element: <OffshoreBio/>},
    {path:"/whales/grays", element: <GrayBio/>},
    {path:"/whales/blues", element: <BlueBio />},
    {path:"/whales/humpbacks", element: <HumpbackBio/>},
    {path:"/whales/fins", element: <FinBio />},
    {path:"/whales/minkes", element: <MinkeBio/>},
    {path:"/whales/grays", element: <GrayBio/>},
    {path:"/aboutus", element: <AboutUs/>},
    {path:"/login", element: <Login/>},
    {path:"/signup", element: <Signup/>},
    {path:"/forgotpassword", element: <ForgotPassword/>},
    {path:"/posts", element: <PostPage/>},
    {path:"", element: <ProtectedRoute/>, children: [
      {path:"/account", element: <Account/>}
    ]}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
