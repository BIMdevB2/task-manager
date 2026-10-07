import { useState } from 'react'
import Filtres from './components/Filtres';
import './App.css'

function App() {

  const [filtre, setFiltre] = useState("toutes");

  return (
    <> 
      <h1>Mes tâches</h1>
      <Filtres filtre={filtre} setFiltre={setFiltre}/>
    </>
  )
}

export default App;