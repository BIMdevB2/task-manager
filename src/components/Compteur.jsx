function Compteur({ remainingTasks }) {
    let message;

    if (remainingTasks === 0) {
        message = "Tout est fait !"
    } else if (remainingTasks < 2) {
        message = "Il reste une tâche"
    } else {
        message = `${remainingTasks} tâches restantes`
    }

    return (
        <span className="span">{message}</span>
    );
}
export default Compteur;