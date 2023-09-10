import React, {createContext, useState} from 'react'

export const LeneguageContext = createContext();

export const ContextProvider = ({children}) => {

    const [isEnglish, setIsEnglish] = useState(true)
    const [thisColor, setThisColor] = useState(true)

    const toogleLenguage = () =>{
      setIsEnglish(!isEnglish);
    }

    const toogleColor = () =>{
        setThisColor(!thisColor);
    }

  return (
    <LeneguageContext.Provider value={{isEnglish, toogleLenguage, toogleColor, thisColor}}>
      {children}
    </LeneguageContext.Provider>
  )
}


