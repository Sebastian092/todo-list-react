import { Button, TaskButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <TaskButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} completed
                    </Button>
                    <Button
                        onClick={setAllDone}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Complete all
                    </Button>
                </>
            )}
        </TaskButtons>
    )
};

export default Buttons;
