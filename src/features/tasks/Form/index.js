import { useState, useRef } from "react";
import { Button, FormSection, Input } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const fokusInput = () => {
    inputRef.current.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));


    setNewTaskContent("");
  };

  return (
    <FormSection onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        id="form"
        value={newTaskContent}
        type="text"
        placeholder="What is there to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
        onClick={fokusInput}
      >
        Add a task
      </Button>
    </FormSection>
  );
};

export default Form;