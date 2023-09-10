import React, { useContext } from 'react'
import { LeneguageContext } from '../LenguageContext'
import BgAnimated from '../background animated/BgAnimated'
import './Home.css'


const Home = () => {
    const {isEnglish, thisColor} = useContext(LeneguageContext);

  return (
    <div className='HomeContent border' >
        <div className='HomePresentation '>
            <h2>{isEnglish ? "HELLO👋, I'M" : 'HOLA👋, SOY'}</h2>
            <h1>Nicolas Navarrete</h1>
        </div>
        <div className='HomeBio'>
            <h2>{isEnglish ? "Full Stack Developer" : "Desarrollador Full Stack"}</h2>

            <h3>{isEnglish ? "Welcome" : "Bienvenidos"}</h3>
        </div>
    </div>
  )
}


export default Home
