import React, {createContext, useState} from 'react'

export const LeneguageContext = createContext();

export const LenguageProvider = ({children}) => {

    const [isEnglish, setIsEnglish] = useState(true)

    const toogleLenguage = () =>{
        setIsEnglish(!isEnglish);
    }

  return (
    <LeneguageContext.Provider value={{isEnglish, toogleLenguage}}>
        {children}
    </LeneguageContext.Provider>
  )
}


