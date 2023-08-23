import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div id='navbar'>
      <div className='nav-container'>
        <div className='burger-link-container'>
          <button>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <div className='li-container'>
            <ul>
              <li>
                <a>Inicio</a>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
