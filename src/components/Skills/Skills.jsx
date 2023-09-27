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
  faDocker,
  faJava,
  faAngular,
  faImdb,
  faMdb
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Skills.css'

const Skills = () => {
    const { isEnglish } = useContext(LeneguageContext);


  return (
    <div id='Skills' className='SkillsContent'>
      <div className="SkillsTitle">
        <h1>
            {isEnglish ? "My Tech Stack" : "Mi Stack Tech"}
        </h1>
      </div>
      <div className="SkillsList">
        <div className="techIcon">
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faHtml5} /> <span>HTML</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faCss3Alt} /><span>CSS3</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faJsSquare} /><span>JAVASCRIPT</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faReact} /><span>REACT</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faAngular} /><span>ANGULAR</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faSass} /><span>SASS</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faBootstrap} /><span>BOOTSTRAP</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faGithub} /><span>GITHUB</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faNodeJs} /><span>NODEJS</span></div>
            <div className="techDiv"><span>Express</span></div>
            <div className="techDiv"><FontAwesomeIcon className="icon" icon={faDatabase} /><span>SQL</span></div>
            <div className="techDiv"><span>MongoDB</span></div>
            <div id="inProgress" className="techDiv"><FontAwesomeIcon className="icon" icon={faDocker} /><span>DOCKER</span></div>
            <div id="inProgress" className="techDiv"><FontAwesomeIcon className="icon" icon={faJava} /><span>JAVA</span></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
