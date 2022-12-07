import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Añade una nueva tarea.</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        className="todoForm-textarea"
        placeholder="Escribe una tarea"
      />
      <div className="buttons">
        <button className="addButton" type="submit">Añadir</button>
        <button className="cancelButton" type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
