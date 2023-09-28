import React, { useState, useContext } from "react";
import { LeneguageContext } from "../LenguageContext";
import './Contact.css'

const Contact = () => {
    const { isEnglish } = useContext(LeneguageContext);
  return (
    <div id='Contact' className='ContactContent'>
      <div className='ContactTitle'>
        <h1>
            {isEnglish ? "Contact Me" : "Contacto"}
        </h1>
      </div>
    </div>
  )
}

export default Contact
