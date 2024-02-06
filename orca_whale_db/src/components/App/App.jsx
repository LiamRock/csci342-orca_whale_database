import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sightings from '../Sightings/Sightings.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "App">
        <Sightings />
      </div>
    </>
  )
}

export default App
