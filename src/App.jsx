import { useState } from 'react'
import './App.css'
import iconLogo from '../public/circle.ico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={iconLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
    </>
  )
}

export default App
