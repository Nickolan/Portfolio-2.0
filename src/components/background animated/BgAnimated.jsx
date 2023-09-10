import React from 'react'
import "./BgAnimated.css"

const BgAnimated = () => {
  return (
    <div className='container absolute -z-10 bottom-3'>
      <div className='bubbles'>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 24 }}></span>
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 30 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 25 }}></span>
      </div>
    </div>
  )
}

export default BgAnimated
