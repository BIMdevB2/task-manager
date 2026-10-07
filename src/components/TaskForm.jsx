import { useState } from "react";

function TaskForm({onAddTask}) {
    const [task, setTask] = useState({
        title: '',
    })

    const [error, setError] = useState()
    
    function handleChange(event) {
        const {name, value} = event.target;
        setTask((currentData) => ({
            ...currentData,
            [name]: value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newTask = {
            id: Date.now(),
            title: setTask.title,
            completed: false
        }
        
        onAddTask(newTask)

        setTask({
            title: '',
        })

        setError('')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Titre</label>
                <input type="text" id='title' name='title' 
                    placeholder="Nouvelle tâche" value={task.title} onChange={handleChange}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Ajouter</button>
        </form>
    );
}
export default TaskForm;