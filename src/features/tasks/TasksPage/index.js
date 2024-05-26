import Form from "./Form"
import TasksList from "../../tasks/TasksPage/TasksList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

function TasksPage() {
  return (
    <Container>
      <Header title="To-do list" />
      <Section
        title="Add a new task"
        body={<Form />}
      />

      <Section
        title="To-do list"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  )
};

export default TasksPage;