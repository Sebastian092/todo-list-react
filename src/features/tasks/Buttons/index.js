import { Button, TaskButtons } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <TaskButtons>
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
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
);

export default Buttons;
