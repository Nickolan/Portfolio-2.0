import React, {useContext, useState} from 'react'
import './navbar.css'
import { LeneguageContext } from '../LenguageContext'

export default function Navbar() {

  const {isEnglish, toogleLenguage} = useContext(LeneguageContext)
  const [menuOpen, setMenuOpen] = useState(true)
  const openBrugerNavbar = () =>{
    setMenuOpen(!menuOpen)
  }

  return (
    <nav id='navbar'>
      <div className='nav-container'>
        <div className='burger-link-container'>
          <button className={!menuOpen ? 'btn-active' : 'btn'} onClick={openBrugerNavbar}>
            <div id='div-01'></div>
            <div id='div-02'></div>
            <div id='div-03'></div>
          </button>
          <div className={!menuOpen ? 'li-container-active' : 'li-container'}>
            <h2 onClick={toogleLenguage}>{isEnglish ? 'En' : 'Es'}</h2>
            <ul>
              <li>
                <a>{isEnglish ? 'Home' : 'Inicio'}</a>
              </li>
              <li>
                <a>{isEnglish ? 'About Me' : 'Sobre Mi'}</a>
              </li>
              <li>
                <a>{isEnglish ? 'Skills' : 'Habilidades'}</a>
              </li>
              <li>
                <a>{isEnglish ? 'Projects' : 'Proyectos'}</a>
              </li>
              <li>
                <a>{isEnglish ? 'Certificates' : 'Certificados'}</a>
              </li>
              <li>
                <a>{isEnglish ? 'Contact Me' : 'Contactame'}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
