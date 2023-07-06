import { useState } from 'react'
import { Button, FormSection, Input } from "./styled"

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent === "") {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <FormSection onSubmit={onFormSubmit}>
      <Input
        id="form"
        value={newTaskContent}
        type="text"
        placeholder="What is there to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Add a task</Button>
    </FormSection>
  );
};

export default Form;