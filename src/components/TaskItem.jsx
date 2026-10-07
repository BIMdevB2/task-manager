function TaskItem({ tache, onToggle, onSupprimer }) {
  return (
    <li className={`task-item${tache.terminee ? "-terminee" : ""}`}>
      <input className="form-check-input"
        type="checkbox"
        checked={tache.terminee}
        onChange={() => onToggle(tache.id)}
      />

      <span>{tache.texte}</span>

      <button className="btn btn-danger" onClick={() => onSupprimer(tache.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;