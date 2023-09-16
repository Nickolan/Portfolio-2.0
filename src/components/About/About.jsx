import React, {useState, useContext} from 'react'
import profileImage from '../../../public/images/4.png'
import { LeneguageContext } from '../LenguageContext'
import './About.css'

const About = () => {

    const [cvReveal, setCV] = useState(false)
    const {isEnglish} = useContext(LeneguageContext);
    const pdfUrlEnglish = '../../../public/images/CvEnglish.pdf'
    let pdfUrlSpanish = '../../../public/images/CvSpanish.pdf'
    const cvWindows = () => {
        
    }

  return (
    <div className='AboutContent'>
      <div className='AboutImage'>
        <div id='N1'>
            <div id='N2'>
                <div id='N3'>
                    <button onClick={() => setCV(!cvReveal)}>
                        {
                            !cvReveal ? <img className='rounded-full' src={profileImage} alt="" /> :
                            <div onClick={cvWindows} className='CvButton'>
                                <a download={isEnglish ? 'Cv-Navarrete-Nicolas_Eng' : 'Cv-Navarrete-Nicolas_Esp'} href={isEnglish ? pdfUrlEnglish : pdfUrlSpanish}>CV</a>
                            </div> 
                        }
                        
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About