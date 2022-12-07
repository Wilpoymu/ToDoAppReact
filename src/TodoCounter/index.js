import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} tareas
    </h2>
  );
};

export { TodoCounter };
