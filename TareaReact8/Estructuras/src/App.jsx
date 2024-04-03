import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstApp from './FirstApp'

const App = () => {

  return (
    <>
    <FirstApp 
    title = "Counter"
    value = {0}
    />
   </>
  )
}

export default App
