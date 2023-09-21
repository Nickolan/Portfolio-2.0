import React, { useContext } from 'react'
import { LeneguageContext } from '../LenguageContext'
import './Home.css'


const Home = () => {
    const {isEnglish} = useContext(LeneguageContext);

  return (
    <div id='Home' className='HomeContent' >
        <div className='HomePresentation '>
            <h2>{isEnglish ? "HELLO👋, I'M" : 'HOLA👋, SOY'}</h2>
            <h1>Nicolas Navarrete</h1>
        </div>
        <div className='HomeBio'>
            <h2>{isEnglish ? "Full Stack Developer" : "Desarrollador Full Stack"}</h2>

        </div>
        <div className='HomeWelcome'>

            <h3>{isEnglish ? "Welcome" : "Bienvenidos"}</h3>
        </div>
    </div>
  )
}


export default Home
