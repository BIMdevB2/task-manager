import TaskItem from "./TaskItem";

function TaskList({ taches, onToggle, onSupprimer }) {
  if (taches.length === 0) {
    return <p>Aucune tâche</p>;
  }

  return (
    <ul>
      {taches.map((tache) => (
        <TaskItem
          key={tache.id} // on utulise le ID comme key parceque il faut qu'il soit unique et identifie chaque élément de la liste/tableau par contre l'indice ne me permet pas d'identifier de maniere unique c juste un referencement le palce dans le tableau/liste 
          tache={tache}
          onToggle={onToggle}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  );
}

export default TaskList;

