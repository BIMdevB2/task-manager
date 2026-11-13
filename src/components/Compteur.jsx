function Compteur({ remainingTasks }) {
    let message;

    if (remainingTasks === 0) {
        message = "Tout est fait !"
    } else if (remainingTasks = 1) {
        message = "Il reste une tâche restante"
    }else if (remainingTasks = 3) {
        message = "Il reste 3 tâches restantes"
    } else {
        message = `${remainingTasks} tâches restantes`
    }

    return (
        <span className="span">{message}</span>
    );
}
export default Compteur;