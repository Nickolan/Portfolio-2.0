import React, { useState, useContext } from "react";
import { LeneguageContext } from "../LenguageContext";
import acrossSpace from "../../../public/Projectsimg/Across-Space.png"
import studyWithpomo from "../../../public/Projectsimg/SWP1.png"
import books4All from "../../../public/Projectsimg/B4A1.png";
import findYourPerrito from "../../../public/Projectsimg/FYP.png"
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
  
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faLink
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
              <img src={findYourPerrito} alt="FYPimage" />
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
              <span className="icon">Express</span>
            </div>
            <div id="ProjectInfo">
              <h3 >{isEnglish ? "Tasks" : "Tareas"}</h3>
              
              <li>{isEnglish ? "Database design and implementation using Sequelize(ORM)" : "Diseño e implementacion de base de datos mediante Sequelize(ORM)"}</li>
              <li>{isEnglish ? "Management of APIs, connection to the server and configuration of routes for editing in the database" : "Manejo De APIs, conexion al servidor y configuracion de rutas para edicion en la base de datos"}</li>
              <li>{isEnglish ? "Design and development of component views" : "Diseño y desarrollo de vistas de componentes"}</li>
              <li>{isEnglish ? "Logic of filters by temperaments and ordering by weight and breed name" : "Logica de filtros mediante temperamentos y ordenamiento por peso y nombre de raza"}</li>
              <li>{isEnglish ? "Paging and search bar configuration" : "Configuracion de paginado y barra de busqueda"}</li>
              <li>{isEnglish ? "Design and development of form for dog breed creation" : "Diseño y desarrollo de formulario para la creacion de raza canina"}</li>
            </div>
            <div id="ProjectLinks">
              <div id="Repositories">
                <div>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/FindYourPerrito-Client">Client</a></button>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/FindYourPerrito-Server">Server</a></button>
                </div>
              </div>
              <div id="Deploy">
                <button><FontAwesomeIcon className="icon" icon={faLink} /><a href="https://find-your-perrito-client.vercel.app">Deploy</a></button>
              </div>
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src={books4All} alt="B4Aimage" />
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
            <div id="ProjectInfo">
              <h3 >{isEnglish ? "Tasks" : "Tareas"}</h3>
              
              <li>{isEnglish ? "Web site view design and development" : "Diseño y desarrollo de la vista del siti web"}</li>
              <li>{isEnglish ? "Design, development and configuration of the administrative panel" : "Diseño, desarrollo y configuracion del panel administrativo"}</li>
              <li>{isEnglish ? "Design and development of the form for adding products" : "Diseño y desarrollo del formulario para el agregado de productos"}</li>
              <li>{isEnglish ? "Product logic and individual views" : "Logica de los productos y sus vistas individuales"}</li>
              <li>{isEnglish ? "Correction of server side errors" : "Corrección de errores del lado del servidor"}</li>
              <li>{isEnglish ? "Code cleaning and modularization" : "Limpieza de codigo y modularizacion"}</li>
              <li>{isEnglish ? "Registration form and start session with Auth0" : "Formulario de registro e inicio de sesion con Auth0"}</li>
            </div>
            <div id="ProjectLinks">
              <div id="Repositories">
                <div>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/Books4All-Front">Client</a></button>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/Books4All-Back">Server</a></button>
                </div>
              </div>
              <div id="Deploy">
                <button><FontAwesomeIcon className="icon" icon={faLink} /><a href="https://books4-all-front.vercel.app">Deploy</a></button>
              </div>
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src={studyWithpomo} alt="SWPimage" />
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
            <div id="ProjectInfo">
              <h3 >{isEnglish ? "Tasks" : "Tareas"}</h3>
              
              <li>{isEnglish ? "Design, development and configuration of the clock and progress bar" : "Diseño, desarrollo y configuracion del reloj y barra de progreso"}</li>
              <li>{isEnglish ? "Development of the clock configuration panel to select use time and stage background" : "Desarrollo del panel de configuracion del reloj para seleccionar tiempo de uso y fondo de escenario"}</li>
              <li>{isEnglish ? "Mobile design and adaptation" : "Diseño y adaptacion mobile"}</li>
              <li>{isEnglish ? "Configuration for background scenario concerning the schedule" : "Configuracion para escenario de fondo referente al horario"}</li>
            </div>
            <div id="ProjectLinks">
              <div id="Repositories">
                <div>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/StudyWithPomo">Github</a></button>
                </div>
              </div>
              <div id="Deploy">
                <button><FontAwesomeIcon className="icon" icon={faLink} /><a href="https://study-with-pomo.vercel.app">Deploy</a></button>
              </div>
            </div>
          </div>
          <div id="ProjectItem">
            <div id="ProjectImage">
              <img src={acrossSpace} alt="ASimage" />
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
            <div id="ProjectInfo">
              <h3 >{isEnglish ? "Tasks" : "Tareas"}</h3>
              
              <li>{isEnglish ? "Implementation and configuration of the server using NestJS" : "Implementacion y configuracion del servidor mediante el uso de NestJS"}</li>
              <li>{isEnglish ? "Design and implementation of database and its models in MySQL" : "Diseño e implementacion de base de datos y sus modelos en MySQL"}</li>
              <li>{isEnglish ? "Configuration of routes for database modification" : "Configuracion de rutas para la modificacion en la base de datos"}</li>
              <li>{isEnglish ? "Design and development of views and sections of elements" : "Diseño y desarrolo de vistas y secciones de elementos"}</li>
              <li>{isEnglish ? "Component and views handling" : "Manejo y conexion de componente y sus vistas"}</li>
              <li>{isEnglish ? "Planet and satellite creation form" : "Formulario para la creacion de planetas y satelites"}</li>
              <li>{isEnglish ? "User registration form and session start" : "Formulario para registro de usuarios e inicio de sesion"}</li>
              <li>{isEnglish ? "Configuration of the search bar" : "Configuracion de la barra de busqueda"}</li>
            </div>
            <div id="ProjectLinks">
              <div id="Repositories">
                <div>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/Across-Space">Client</a></button>
                  <button><FontAwesomeIcon className="icon" icon={faGithub} /><a href="https://github.com/Nickolan/Across-Space-Server">Server</a></button>
                </div>
              </div>
              <div id="Deploy">
                <button><FontAwesomeIcon className="icon" icon={faLink} /><a href="https://across-space.vercel.app">Deploy</a></button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects
