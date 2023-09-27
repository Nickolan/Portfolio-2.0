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
  faMdb,
  
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Projects.css'

const Projects = () => {
    const { isEnglish } = useContext(LeneguageContext);
  return (
    <div id='Projects' className='ProjectsContent'>
      <div className="ProjectsTitle">
        <h1>
            {isEnglish ? "MY PROJECTS" : "MIS PROYECTOS"}
        </h1>
      </div>
      <div id="ProjectsList">
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src="../../../public/Projectsimg/FYP.JPG" alt="" />
            </div>
            <div id="ProjectTitle">
              <h1>Find Your Perrito</h1>
            </div>
            <div id="ProjectTechs">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <FontAwesomeIcon className="icon" icon={faCss3Alt} />
              <FontAwesomeIcon className="icon" icon={faJsSquare} />
              <FontAwesomeIcon className="icon" icon={faReact} />
              <FontAwesomeIcon className="icon" icon={faNodeJs} />
              <FontAwesomeIcon className="icon" icon={faDatabase} />
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src="../../../public/Projectsimg/B4A1.JPG" alt="" />
            </div>
            <div id="ProjectTitle">
              <h1>Books 4 All</h1>
            </div>
            <div id="ProjectTechs">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <FontAwesomeIcon className="icon" icon={faCss3Alt} />
              <FontAwesomeIcon className="icon" icon={faJsSquare} />
              <FontAwesomeIcon className="icon" icon={faReact} />
              <FontAwesomeIcon className="icon" icon={faBootstrap} />
              <FontAwesomeIcon className="icon" icon={faNodeJs} />
              <FontAwesomeIcon className="icon" icon={faDatabase} />
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src="../../../public/Projectsimg/SWP1.JPG" alt="" />
            </div>
            <div id="ProjectTitle">
              <h1>Study With Pomo</h1>
            </div>
            <div id="ProjectTechs">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <FontAwesomeIcon className="icon" icon={faSass} />
              <FontAwesomeIcon className="icon" icon={faJsSquare} />
              <FontAwesomeIcon className="icon" icon={faBootstrap} />
              <FontAwesomeIcon className="icon" icon={faReact} />
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src="../../../public/Projectsimg/Across Space.JPG" alt="" />
            </div>
            <div id="ProjectTitle">
              <h1>Across Space</h1>
            </div>
            <div id="ProjectTechs">
              <FontAwesomeIcon className="icon" icon={faHtml5} />
              <FontAwesomeIcon className="icon" icon={faSass} />
              <FontAwesomeIcon className="icon" icon={faJsSquare} />
              <FontAwesomeIcon className="icon" icon={faBootstrap} />
              <FontAwesomeIcon className="icon" icon={faAngular} />
              <FontAwesomeIcon className="icon" icon={faNodeJs} />
              <FontAwesomeIcon className="icon" icon={faDatabase} />
              <span className="icon">MySQL</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects
