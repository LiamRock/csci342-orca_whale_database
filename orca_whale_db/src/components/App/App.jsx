/* App.js */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <p className='site-name'>PNW Whales Database</p>
        <Link className="nav-links" to="/">Home</Link>
        <Link className="nav-links" to="/whales">Whales</Link>
      </nav>
      {/* Outlet */}
      <Outlet />
    </div>
  );
}

export default App;
