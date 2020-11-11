import React from "react";

const TodoButtonFocus = ({ filter, name, clicked }) => {
  return (
    <button
      className={filter === name ? "active" : "inactive"}
      onClick={clicked}
    >
      {name}
    </button>
  );
};

export default TodoButtonFocus;
