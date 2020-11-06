import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const ACTIVE = "active";
  const COMPLETED = "completed";
  const ALL = "all";

  const [allTodos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (filter === ALL) setFilteredTodos(allTodos);
    else if (filter === ACTIVE)
      setFilteredTodos(allTodos.filter((item) => !item.isComplete));
    else if (filter === COMPLETED)
      setFilteredTodos(allTodos.filter((item) => item.isComplete));
  }, [allTodos, filter]);

  const handleAdd = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setAllTodos([todo, ...allTodos]);
  };

  const handleComplete = (todoId) => {
    let updatedTodos = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
    );

    setAllTodos(updatedTodos);
  };

  const handleDelete = (todoId) =>
    setAllTodos(...allTodos.filter((item) => item.id !== todoId));

  const handleFilterButtonClick = (filterType) => () => {
    setFilter(filterType);
  };

  return (
    <div>
      <h4>MY REACT TODO LIST</h4>
      <TodoForm onSubmit={handleAdd} />
      <button onClick={handleFilterButtonClick(ACTIVE)}>Active</button>
      <button onClick={handleFilterButtonClick(COMPLETED)}>Completed</button>
      <button onClick={handleFilterButtonClick(ALL)}>All</button>
      <Todo
        todos={filteredTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoList;
