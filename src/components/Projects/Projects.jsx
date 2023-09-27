import React, { useState, useContext } from "react";
import { LeneguageContext } from "../LenguageContext";
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
    </div>
  )
}

export default Projects
