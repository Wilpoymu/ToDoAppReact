import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Escribe tu búsqueda"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <span className="material-symbols-rounded">search</span>
    </div>
  );
};

export { TodoSearch };
