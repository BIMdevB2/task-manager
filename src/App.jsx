import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Compteur from './components/Compteur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskForm onAddTask={addTask}/>
      <Compteur />
    </>
  )
}

export default App
