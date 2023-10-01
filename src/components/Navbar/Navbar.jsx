import React, {useContext, useState} from 'react'
import './navbar.css'
import { LeneguageContext } from '../LenguageContext'

export default function Navbar() {

  const {isEnglish, toogleLenguage, thisColor, toogleColor} = useContext(LeneguageContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const openBrugerNavbar = () =>{
    setMenuOpen(!menuOpen)
  }

  return (
    <nav id='navbar'>
      <div className='nav-container'>
        <div className='burger-link-container '>
          <button id='buttonChanger' className={!menuOpen ? 'btn-active' : 'btn'} onClick={openBrugerNavbar}>
            <div id='div-01'></div>
            <div id='div-02'></div>
            <div id='div-03'></div>
          </button>
          <div id='navList' className={!menuOpen ? 'li-container-active' : 'li-container'}>
            <div id='configEnv'>
              <h2 id='lenguageChanger' onClick={toogleLenguage}>{isEnglish ? 'En' : 'Es'}</h2>
              <div id='colorChanger' onClick={toogleColor} className='rounded-full border w-10 h-10'></div>
            </div>
            <ul id='seccionChanger'>
              <li>
                <a onClick={() => setMenuOpen(false)}  href='#Home'>{isEnglish ? 'Home' : 'Inicio'}</a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)}  href='#About'>{isEnglish ? 'About Me' : 'Sobre Mi'}</a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)} href='#Skills' >{isEnglish ? 'Skills' : 'Habilidades'}</a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)} href='#Projects' >{isEnglish ? 'Projects' : 'Proyectos'}</a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)} href='#Contact' >{isEnglish ? 'Contact Me' : 'Contactame'}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
