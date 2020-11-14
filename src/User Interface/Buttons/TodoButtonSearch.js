import React from "react";

const TodoButtonSearch = ({ search, handle }) => {
  const nameChanger = search === false ? "Add Item" : "Search";

  return (
    <button className={nameChanger} onClick={handle}>
      {nameChanger}
    </button>
  );
};

export default TodoButtonSearch;
