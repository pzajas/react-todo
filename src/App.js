import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import List from "./Components/Todo/List";
import ToggleButton from "./Components/Buttons/ToggleButton";
import FilterForm from "./Components/Todo/FilterForm";
import AddForm from "./Components/Todo/AddForm";
import SearchForm from "./Components/Todo/SearchForm";
import { COMPLETED, ACTIVE, ALL } from "./Components/Todo/Const";
import { setFilter } from "./Store/Todo/actions";

const App = ({ filter, setFilter }) => {
  const [allTodos, setAllTodos] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [filteredTodos, setFilteredTodos] = useState([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (filter === ALL) setFilteredTodos(allTodos.filter((item) => item.text.includes(searchTerm)));
    else if (filter === ACTIVE) setFilteredTodos(allTodos.filter((item) => !item.isComplete).filter((item) => item.text.includes(searchTerm)));
    else if (filter === COMPLETED) setFilteredTodos(allTodos.filter((item) => item.isComplete).filter((item) => item.text.includes(searchTerm)));
  }, [allTodos, filter, searchTerm]);

  const handleComplete = todoId => {
    let updatedTodos = allTodos.map((todo) => (todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo));
    setAllTodos(updatedTodos);
  };

  const handleDelete = todoId => {
    setAllTodos(allTodos.filter((item) => item.id !== todoId));
  };

  const handleFilterButtonClick = filterType => () => {
    setFilter(filterType)
  };

  const handleAdd = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setAllTodos([todo, ...allTodos]);
  };

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleButtonSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <h4>MY REACT TODO LIST</h4>
      <ToggleButton
        onClick={handleButtonSearch}
        isActive={isActive}>
        {isActive ? "Search" : "Add Todo"}
      </ToggleButton>
      {isActive ?
        <SearchForm
          value={searchTerm}
          onChange={handleChange} /> :
        <AddForm
          onSubmit={handleAdd} />}

      <FilterForm />
      <List
        items={filteredTodos}
        itemOnClick={handleComplete}
        itemOnRemove={handleDelete} />
    </div>
  );
};

const mapStateToProps = ({ todo }) => ({
  filter: todo.filter,
  handleFilterButtonClick: todo.handleFilterButtonClick
});

const mapDispatchToProps = {
  // setFilterAction: setFilter,
  setFilter
}

// \/ tutaj sie podpina :D
export default connect(mapStateToProps, mapDispatchToProps)(App)

// 1. podpiac FilterForm do storu
// 2. zainstalowac eslinta
// nie chce srednuikow na koncu
// nie chce nawiasow na pojedynczych propsach
// 3. zainstalowac pretteier
// 2 spacjowe wciecia

