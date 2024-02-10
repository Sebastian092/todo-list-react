import Form from "./Form";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      <Header title="To-do list" />
      <Section
        title="Add a new task"
        body={<Form/>}
      />

      <Section
        title="To-do list"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  )
};

export default Tasks;