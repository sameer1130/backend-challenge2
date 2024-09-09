
import { useState } from 'react'
import './App.css'

import { SwitchMode } from './components/SwitchMode'
import Logo from "./images/logo.svg"
import LogoWhite from "./images/logo-white.svg"
import { DragAndDrop } from './components/DragAndDrop'

function App() {
  const [lightMode, setLightMode] = useState(true)

  const handlerSwitch=() =>{
    setLightMode(!lightMode)
  }

  return (
    <>
    <div className={`${lightMode ? "bg-lightwhite" : "bg-dark"}`}>

      <div className='min-h-screen'>
        <div className='flex justify-between p-6 border-b items-center'>
          <div className='pl-12'>
            
            <img src={lightMode ? Logo : LogoWhite} alt="Logo" ></img>
          </div>
          <div className='pr-12'>

            <SwitchMode lightMode={lightMode} handlerSwitch={handlerSwitch} />
          </div>
        </div>
        <div className='flex justify-center  mt-40'>

          <DragAndDrop lightMode={lightMode}/>  
        </div>
      </div>
    </div>
    </>
  )
}

export default App
