import React from "react";
import { connect } from 'react-redux'
import { handleDelete, handleComplete, setFilteredTodos } from '../../Store/Todo/actions'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const List = ({
  handleDelete,
  handleComplete,
  filteredTodos
}) => {

  return filteredTodos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-complete" : "todo-incomplete"}
      key={index}
    >
      <div key={todo.id} onClick={() => handleComplete(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => handleDelete(todo.id)}
          className="delete-item"
        />
        <TiEdit />
      </div>
    </div>
  ));
}

const mapStateToProps = ({ todo }) => ({
  filteredTodos: todo.allTodos,

});

const mapDispatchToProps = {
  handleDelete,
  handleComplete,
  setFilteredTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(List)