import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`
                }
            >
                <button
                    className="tasks__button tasks__button--done "
                    onClick={() => toggleTaskDone(tasks.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="tasks__button tasks__button--delete">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;