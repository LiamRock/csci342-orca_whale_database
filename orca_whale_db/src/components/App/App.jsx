import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to="/">Home    </Link>
        <Link to="/whales">    Whales</Link>
      </nav>
      {/* Outlet */}
      <Outlet/>
    </div>
  )
}

export default App
