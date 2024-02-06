import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Whales from './components/Whales';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Whales />
    </>
  )
}

export default App
