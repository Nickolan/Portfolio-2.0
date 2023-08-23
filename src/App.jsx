import { useState } from 'react'
import './App.css'
import iconLogo from '../public/circle.ico'
import { LenguageProvider } from './components/LenguageContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <Router>
      <LenguageProvider>
        <div className='App'>
          <div className='bg' id='home'>
            <div className='navbar'>
              <Navbar></Navbar>
            </div>
          </div>
        </div>
      </LenguageProvider>
    </Router>
  )
}

export default App
