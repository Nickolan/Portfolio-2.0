import React, { useContext } from 'react'
import { LeneguageContext } from '../LenguageContext'
import './Home.css'

const Home = () => {
    const {isEnglish} = useContext(LeneguageContext)
  return (
    <div className='HomeContent'>
        <div className='HomePresentation'>
            <h2>{isEnglish ? "HELLO, I'M" : 'HOLA, SOY'}</h2>
            <h1>Nicolas Navarrete</h1>
        </div>
        <div className='HomeBio'>
            <h2>{isEnglish ? "Full Stack Developer" : "Desarrollador Full Stack"}</h2>
        </div>
        <div className='HomeWelcome'>
            <h2 >{isEnglish ? "WELCOME TO MY PORTFOLIO" : "BIENVENIDOS A MI PORTFOLIO"}</h2>
        </div>
    </div>
  )
}

export default Home
