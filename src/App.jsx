import './App.css'
import { LeneguageContext } from './components/LenguageContext';
import { useContext } from 'react';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BgAnimated from './components/background animated/BgAnimated';

function App() {
  const {thisColor} = useContext(LeneguageContext);
  return (
        <div className='contentApp ' >
            <div className='' style={{"--primary-color": thisColor ? "#4fc3dc" : "#ff2d75"}}>
              <BgAnimated/>
              <Navbar/>
              <Home/>
            </div>
        </div>
  )
}

export default App
