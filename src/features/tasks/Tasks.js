import Form from "./Form";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {

  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="To-do list" />
      <Section
        title="Add a new task"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="To-do list"
        body={<TasksList
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
        }
        extraHeaderContent={
          <Buttons
            toggleHideDone={toggleHideDone}
            tasks={tasks}
            hideDone={hideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  )
};

export default Tasks;