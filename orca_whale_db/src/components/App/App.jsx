import React, {useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../HomePage/NavBar/NavBar.jsx'
import Footer from '../HomePage/Footer/Footer.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { login, loader} from '../../store/slices/authSlices';
//import AppLoader from '../../util/loaders/AppLoader';

import '../../input.css'


function App() {
  const { loaded } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      const user = JSON.parse(localStorage.getItem('user'));
      // Simulate loading user data
      setTimeout(() => {
        dispatch(login({
          userName: user?.userName || '',
          email: user?.email || '',
        }));
        dispatch(loader(true)); // Finish loading
      }, 2000);
    }
  }, [dispatch, loaded]); 
  return (
      <div className = "App">
        {!loaded ? '' : (
          <>
            <NavBar/>
            <Outlet/>
            <Footer/>
          </>
        )}
        
      </div>
  )
}

export default App;
