import React, { useState } from 'react'
import { createContext } from "react";

export const Sliders = createContext();

const Context = ({children}) => {

    const [sliders , setSlider] = useState([]);

  return (
    <Sliders.Provider value={{sliders,setSlider}}>{children}</Sliders.Provider>
  )
}

export default Context