import React, { useState, useContext } from "react";
import { LeneguageContext } from "../LenguageContext";
import { 
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faBootstrap,
  faGithub,
  faSass,
  faAngular,
  faLinkedinIn,
  faLinkedin,
  faWhatsapp
  
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faLink,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div id="ContactLinks">
          <a target="_blank" href="https://www.linkedin.com/in/nikolas-navarrete/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
          <a target="_blank" href="https://github.com/Nickolan"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
          <a href="mailto:nicolassantiagonavarrete.nsn@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
          <a href="https://wa.me/+5492616090889"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></a>
      </div>
    </div>
  )
}

export default Contact
