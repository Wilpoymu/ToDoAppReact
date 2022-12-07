import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span
        className={`material-symbols-rounded Icon-check ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}
      >
        done
      </span>
      <div
        className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}
      >
        <p>{props.text}</p>
        <span
          className="material-symbols-rounded Icon Icon-delete"
          onClick={props.onDelete}
        >
          close
        </span>
      </div>
    </li>
  );
};

export { TodoItem };
