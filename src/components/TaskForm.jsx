import { useState } from "react";

function TaskForm({onAddTask}) {
    const [task, setTask] = useState("")
    
    function handleChange(event) {
        setTask(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!task.trim()) return "La tache est invalide";

        onAddTask(task.trim())    
        setTask("")
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" id='texte' name='texte' 
                placeholder="Nouvelle tâche" value={task.texte}
                onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TaskForm;