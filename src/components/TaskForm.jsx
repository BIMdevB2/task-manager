import { useState } from "react";

// Q6 : Formulaire contrôlé
 function TaskForm({ onAddTask }) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Q9 : Refuse un texte vide ou composé uniquement d'espaces
    if (!texte.trim()) return "Le texte est invalide";
    onAddTask(texte.trim());
    setTexte("");
  };


  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;