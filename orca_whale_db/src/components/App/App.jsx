import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import '../../input.css'
import './App.css'
import Sightings from '../Sightings/Sightings.jsx';
import CreateDiscussion from '../CreateDiscussion/CreateDiscussion.jsx';
import Banner from '../HomePage/Banner/Banner.jsx'
import NavBar from '../HomePage/NavBar/NavBar.jsx'
import Footer from '../HomePage/Footer/Footer.jsx'

function App() {
  return (
    <>
      <div className = "App">
        {/*<Sightings />*/}
        <NavBar/>
        <Banner/>
        <Sightings />
        <CreateDiscussion/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
