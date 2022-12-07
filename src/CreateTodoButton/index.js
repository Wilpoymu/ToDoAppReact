import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const onClickButon = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="CreateTodoButton">
        <button className="button" onClick={onClickButon}>
          <span className="material-symbols-rounded">add_circle</span>
        </button>
      </div>
    </>
  );
};

export { CreateTodoButton };
