import React from 'react'
import MoonComponent from './Moon'
import "./App.css"

function App() {
  return (
    <>
      <div className=' fixed w-[60rem] h-[60rem] flex moon'>
        <MoonComponent />
      </div>

        <div className='w-[60rem] h-[60rem] fixed  glow rounded-full  '></div>
    </>

  )
}

export default App