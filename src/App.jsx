import './App.css'
import { LenguageProvider } from './components/LenguageContext'

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {

  return (
      <LenguageProvider>
        <div className='contentApp'>
            <div className='navbar'>
              {/* <Navbar/> */}
              <Home/>
            </div>
        </div>
      </LenguageProvider>
  )
}

export default App
