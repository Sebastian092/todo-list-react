import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
 
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
        body={<Tasks
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

export default App;