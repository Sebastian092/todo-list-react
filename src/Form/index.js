import { useState } from 'react'
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        type="text"
        className="form__input"
        placeholder="co jest do zrobienia?"
        onChange ={({target}) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;