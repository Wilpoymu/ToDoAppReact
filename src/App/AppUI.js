import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error al cargar</p>}
        {loading && <p>Cargando...</p>}
        {!loading && !searchedTodos.length && <p>Crea una tarea.</p>}
        {!loading &&
          !error &&
          searchedTodos.map((todo) => (
            <TodoItem
              completed={todo.completed}
              key={todo.text}
              text={todo.text}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          {/* <p>{searchedTodos[0]?.text}</p> */}
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export { AppUI };
