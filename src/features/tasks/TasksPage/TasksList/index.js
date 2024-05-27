import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../../tasksSlice";
import { Link } from "react-router-dom";
const TasksList = () => {
    const { tasks, hideDone, } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    $hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>
                    <Content $done={task.done}>
                        <Link to={`/orders/${task.id}`}>{task.content}</Link>
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;