import "./style.css"

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`task__item ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
            >
                <button className="task__button task__button--done">{task.done ? "✔" : ""}</button>
                <span className={`task__content ${task.done ? "task__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="task__button task__button--delete">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;