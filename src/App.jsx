import { useState } from 'react'
import Filtres from './components/Filtres';
import TaskForm from './components/TaskForm'
import Compteur from './components/Compteur'
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: "Réviser le chapitre 3", terminee: false },
    { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: true },
    { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
  ]);


  function ajouterTache (texte) {
    const nouvelleTache = {
      id: Date.now(),
      texte: texte,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  //cette function pemet de basculer l'état de validité de la tache
  const basculerTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(
     taches.filter((tache) => 
        tache.id !== id
      )
    )
  }

  const supprimerTerminees = () => {
    setTaches(
      taches.filter((tache) =>
         !tache.terminee
      )
    )
  }

  function toutMarquerCommeFait() {
    setTaches(
      taches.map(function (tache) {
        return { ...tache, terminee: true };
      })
    );
  }

  const [filtre, setFiltre] = useState("toutes");

  function modifierFiltre(filtre) {
    setFiltre(filtre);
  }

  const remainingTasks = taches.filter((tache) => !tache.terminee).length

  return (
    <>
      {/* <Compteur /> */}
      <div className="container">
        <h1>Mes tâches</h1>
        <TaskForm onAddTask={ajouterTache} />

        <TaskList
          taches={taches}
          onToggle={basculerTache}
          onSupprimer={supprimerTache}
        />
        <Compteur remainingTasks={remainingTasks} />
        <div className="actions-globales">
          <button onClick={toutMarquerCommeFait}>Tout Marquer Comme Fait</button>
          <button onClick={supprimerTerminees}>Supprimer les Taches Terminées</button>
        </div>

        <Filtres filtre={filtre} onFiltre={modifierFiltre}/>

      </div>
    </>
  );
}


export default App;