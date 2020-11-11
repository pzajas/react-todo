import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoButton from "../User Interface/Buttons/TodoButtonFocus";
import TodoButtonSearch from "../User Interface/Buttons/TodoButtonSearch";
import HandleForm from "../User Interface/Forms/HandleForm";

const TodoList = () => {
  const ACTIVE = "active";
  const COMPLETED = "completed";
  const ALL = "all";

  const [allTodos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (filter === ALL) setFilteredTodos(allTodos);
    else if (filter === ACTIVE)
      setFilteredTodos(allTodos.filter((item) => !item.isComplete));
    else if (filter === COMPLETED)
      setFilteredTodos(allTodos.filter((item) => item.isComplete));
  }, [allTodos, filter]);

  useEffect(() => {
    const results = allTodos.filter((item) => item.text.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm, allTodos]);

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

  const handleButtonSearch = () => {
    setSearch(!search);
    console.log(searchResults);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h4>MY REACT TODO LIST</h4>
      <TodoButtonSearch handle={handleButtonSearch} search={search} />
      <HandleForm
        search={search}
        onSubmit={handleAdd}
        value={searchTerm}
        onChange={handleChange}
        searchResults={searchResults}
      />
      <TodoButton
        name="active"
        filter={filter}
        clicked={handleFilterButtonClick(ACTIVE)}
      />
      <TodoButton
        name="completed"
        filter={filter}
        clicked={handleFilterButtonClick(COMPLETED)}
      />
      <TodoButton
        name="all"
        filter={filter}
        clicked={handleFilterButtonClick(ALL)}
      />
      <Todo
        todos={filteredTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        search={search}
        searchResults={searchResults}
        filter={filter}
        ALL={ALL}
        COMPLETED={COMPLETED}
        ACTIVE={ACTIVE}
      />
    </div>
  );
};

export default TodoList;
