import React, { useState, useEffect } from "react";
import List from "./Components/Todo/List";
import ToggleButton from './Components/Buttons/ToggleButton'
import HandleForm from "./Components/Todo/HandleForm";
import FilterForm from "./Components/Todo/FilterForm";

const App = () => {
  const ACTIVE = "active";
  const COMPLETED = "completed";
  const ALL = "all";

  const [allTodos, setAllTodos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [filter, setFilter] = useState(ALL);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (filter === ALL)
      setFilteredTodos(allTodos.filter((item) => item.text.includes(searchTerm)))
    else if (filter === ACTIVE)
      setFilteredTodos(allTodos.filter((item) => !item.isComplete).filter((item) => item.text.includes(searchTerm)))
    else if (filter === COMPLETED)
      setFilteredTodos(allTodos.filter((item) => item.isComplete).filter((item) => item.text.includes(searchTerm)))

  }, [allTodos, filter, searchTerm])

  const handleComplete = (todoId) => {
    let updatedTodos = allTodos.map((todo) =>
      todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo

    );
    setAllTodos(updatedTodos);
  };

  const handleDelete = (todoId) => {
    setAllTodos(allTodos.filter((item) => item.id !== todoId));
  }

  const handleFilterButtonClick = (filterType) => () => {
    setFilter(filterType)
  }

  const handleAdd = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setAllTodos([todo, ...allTodos]);
  }


  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  const handleButtonSearch = () => {
    setIsActive(!isActive);
  }

  return (
    <div>
      <h4>MY REACT TODO LIST</h4>
      <ToggleButton
        onClick={handleButtonSearch}
        isActive={isActive}
      />
      <HandleForm
        isActive={isActive}
        onSubmit={handleAdd}
        value={searchTerm}
        onChange={handleChange}
        searchResults={searchResults}
      />
      <FilterForm
        ACTIVE={ACTIVE}
        COMPLETED={COMPLETED}
        ALL={ALL}

        filter={filter}
        handleFilterButtonClick={handleFilterButtonClick}
      />
      <List
        todos={filteredTodos}
        handleComplete={handleComplete}
        handleDelete={handleDelete} />
    </div>



  )
};

export default App;
