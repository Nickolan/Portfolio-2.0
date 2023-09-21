import React, {useState, useContext} from 'react'
import profileImage from '../../../public/images/4.png'
import { LeneguageContext } from '../LenguageContext'
import './About.css'

const About = () => {

    const [cvReveal, setCV] = useState(false)
    const {isEnglish} = useContext(LeneguageContext);
    const pdfUrlEnglish = '../../../public/images/CvEnglish.pdf'
    let pdfUrlSpanish = '../../../public/images/CvSpanish.pdf'
    const [infoType, setInfoType] = useState(true)
    
    const year = new Date().getFullYear();
    const age = year - 2003;
    const me = {
      user: 'Hola'
    }

  return (
    <div id='About' className='AboutContent'>
      <div className='AboutTitle'>
        <h1>{isEnglish ? "About Me" : "Sobre Mi"}</h1>
      </div>
      <div className='AboutImage'>
        <div id='N1'>
            <div id='N2'>
                <div id='N3'>
                    <button onClick={() => setCV(!cvReveal)}>
                        {
                            !cvReveal ? <img className='rounded-full' src={profileImage} alt="" /> :
                            <div className='CvButton'>
                                <a download={isEnglish ? 'Cv-Navarrete-Nicolas_Eng' : 'Cv-Navarrete-Nicolas_Esp'} href={isEnglish ? pdfUrlEnglish : pdfUrlSpanish}>CV</a>
                            </div> 
                        }
                        
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div className='AboutText'>
        <button onClick={() => setInfoType(!infoType)} className='AboutChanger'>change</button>
        {
          infoType ? (

        <div id='InfoCode'>
              <div className='flex flex-row'> <span id='keywords'>const</span><span id='text1'>{isEnglish ? "Welcome" : "Bienvenido"}</span> <span id='keywords'>=</span> <span id='simbols'>( )</span> <span id='keywords'>{'=>'}</span> <span id='simbols'>{'{'}</span></div>
                <div className='ml-5'> <span id='keywords'>const</span><span id='text1'>{isEnglish ? "Me" : "Yo"}</span> <span id='keywords'>=</span> <span id='simbols'>{'{'}</span></div>
                    <div id='AboutObject' className='ml-10'>
                        <div><span id='text1'>{isEnglish ? "firstName" : "nombre"}</span> <span id='keywords'>:</span> <span id='strings'>{"'Nicolas'"},</span></div>
                        <div><span id='text1'>{isEnglish ? "lastName" : "apellido"}</span> <span id='keywords'>:</span> <span id='strings'>{"'Navarrete'"},</span></div>
                        <div><span id='text1'>{isEnglish ? "age" : "edad"}</span> <span id='keywords'>:</span> <span id='strings'>{`'${age}'`},</span></div>
                        <div><span id='text1'>{isEnglish ? "country" : "pais"}</span> <span id='keywords'>:</span> <span id='strings'>{"'Argentina'"},</span></div>
                        <div><span id='text1'>{isEnglish ? "lenguage" : "idiomas"}</span> <span id='keywords'>:</span> <span id='strings'>{isEnglish ? "[Spanish (Native), English (C1), French (A1)]" : "[Español (Nativo), Ingles (C1), Frances (A1)]"}</span></div>
                    </div>
                <div className='ml-5'><span id='simbols'>{'}'}</span></div>
                <div className='ml-5'><span id='keywords'>return</span> <span>{isEnglish ? "Welcome" : "Bienvenido"}</span></div>
              <div><span id='simbols'>{'}'}</span></div>
              <div><span>{isEnglish ? "Welcome" : "Bienvenido"}</span> <span id='simbols'>( )</span></div>
        </div>
          ) : (
        <div id='InfoText'>
              
        </div>

          )
        }
      </div>
    </div>
  )
}

export default About