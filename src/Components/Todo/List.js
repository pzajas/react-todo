import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({
  items,
  itemOnClick,
  itemOnRemove,

}) => {

  return items.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-complete" : "todo-incomplete"}
      key={index}
    >
      <div key={todo.id} onClick={() => itemOnClick(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => itemOnRemove(todo.id)}
          className="delete-item"
        />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo;


// if (search) {
//   return (
//     <div className="App">
//       {searchResults.map((item) => (
//         <li>{[item.text]}</li>
//       ))}
//     </div>
//   );