import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  const handleShowAllTodos = () => setFilteredTodos(allTodos);
  const handleShowActiveTodos = () =>
    setFilteredTodos(allTodos.filter((item) => !item.isComplete));
  const handleShowCompletedTodos = () =>
    setFilteredTodos(allTodos.filter((item) => item.isComplete));

  return (
    <div>
      <h4>MY REACT TODO LIST</h4>
      <TodoForm onSubmit={handleAdd} />
      <button onClick={handleShowActiveTodos}>Active</button>
      <button onClick={handleShowCompletedTodos}>Completed</button>
      <button onClick={handleShowAllTodos}>All</button>
      <Todo
        todos={filteredTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoList;
