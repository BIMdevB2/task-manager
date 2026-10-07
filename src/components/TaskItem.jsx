function TaskItem({ tache, onToggle, onSupprimer }) {
  return (
    <li className={`task-item ${tache.terminee ? "terminee" : ""}`}>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onToggle(tache.id)}
      />

      <span>{tache.texte}</span>

      <button onClick={() => onSupprimer(tache.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;