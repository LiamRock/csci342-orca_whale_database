import { Outlet } from 'react-router-dom';

import NavBar from '../HomePage/NavBar/NavBar.jsx'
import Footer from '../HomePage/Footer/Footer.jsx'

import '../../input.css'
import './App.css'

function App() {
  return (
      <div className = "App">
        <NavBar/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default App;
