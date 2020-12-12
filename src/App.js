import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import List from "./Components/Todo/List"
import ToggleButton from "./Components/Buttons/ToggleButton"
import FilterForm from "./Components/Todo/FilterForm"
import AddForm from "./Components/Todo/AddForm"
import SearchForm from "./Components/Todo/SearchForm"
import { COMPLETED, ACTIVE, ALL } from "./Components/Todo/Const"

import { setFilter, setFilteredTodos, setAllTodos, setSearchTerm, addTodo, handleDelete, handleComplete } from "./Store/Todo/actions"

const App = ({ filter, searchTerm, allTodos }) => {

  //const [filteredTodos,] = useState([])

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (filter === ALL) setFilteredTodos(allTodos.filter((item) => item.text.includes(searchTerm)))
    else if (filter === ACTIVE) setFilteredTodos(allTodos.filter((item) => !item.isComplete).filter((item) => item.text.includes(searchTerm)))
    else if (filter === COMPLETED) setFilteredTodos(allTodos.filter((item) => item.isComplete).filter((item) => item.text.includes(searchTerm)))
  }, [allTodos, filter, searchTerm])

  // const handleComplete = todoId => {
  //   let updatedTodos = allTodos.map((todo) => (todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo))
  //   setAllTodos(updatedTodos)

  // };

  // const handleDelete = todoId => {
  //   setAllTodos(allTodos.filter((item) => item.id !== todoId))
  // };

  // const addTodo = todo => {
  //   if (!todo.text || /^\s*$/.test(todo.text)) {
  //     return;
  //   }
  //   setAllTodos([todo, ...allTodos])
  // }

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
        <SearchForm />
        :
        <AddForm
        />}
      <FilterForm />
      <List />
    </div>
  );
};

const mapStateToProps = ({ todo }) => ({
  filter: todo.filter,
  searchTerm: todo.searchTerm,
  allTodos: todo.allTodos,
  filteredTodos: todo.filteredTodos
});

const mapDispatchToProps = {
  setFilter,
  setFilteredTodos,
  setSearchTerm,
  setAllTodos,
  addTodo,
  handleDelete,
  handleComplete
}

export default connect(mapStateToProps, mapDispatchToProps)(App)