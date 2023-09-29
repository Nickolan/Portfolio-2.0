import './App.css'
import { LeneguageContext } from './components/LenguageContext';
import { useContext } from 'react';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import BgAnimated from './components/background animated/BgAnimated';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const {thisColor} = useContext(LeneguageContext);
  return (
        <div className='contentApp ' >
            <div className='' style={{"--primary-color": thisColor ? "#4fc3dc" : "#ff2d75", "--secundary-color": thisColor ? "#234ebb" : "#c32739"}}>
              <BgAnimated/>
              <Navbar/>
              <Home/>
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
            </div>
        </div>
  )
}

export default App
