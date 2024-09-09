
import { useState } from 'react'
import './App.css'

import { SwitchMode } from './components/SwitchMode'
import Logo from "./images/logo.svg"
import LogoWhite from "./images/logo-white.svg"

function App() {
  const [lightMode, setLightMode] = useState(true)

  const handlerSwitch=() =>{
    setLightMode(!lightMode)
  }

  return (
    <>
    <div className={`${lightMode ? "" : "bg-darkgray"}`}>

      <div className='flex justify-between p-6 border-b items-center'>
      <div>
        
        <img src={lightMode ? Logo : LogoWhite} alt="Logo" ></img>
      </div>
        <SwitchMode lightMode={lightMode} handlerSwitch={handlerSwitch} />
      </div>
    </div>
    </>
  )
}

export default App
