import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstApp from './FirstApp'
import { ComponentApp } from './ComponentApp'

const App = () => {

  return (
    <>
    <FirstApp 
    title = "Counter"
    value = {0}
    />
    <ComponentApp
    categoria = "Tercera categoria"
    />
   </>
  )
}

export default App
