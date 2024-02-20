import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from '../HomePage/NavBar/NavBar';
import Footer from '../HomePage/Footer/Footer';

function App() {
  return (
     <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
