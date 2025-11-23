import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Components/Task'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <Task/>
      <Todos/>
    </>
  )
}

export default App
