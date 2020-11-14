import React from "react";
import SearchForm from "./SearchForm";
import TodoForm from "./TodoForm";

const HandleForm = ({ search, onSubmit, value, onChange, searchResults }) => {
  if (search) {
    return (
      <SearchForm
        value={value}
        onChange={onChange}
        searchResults={searchResults}
      />
    );
  } else return <TodoForm onSubmit={onSubmit} />;
};

export default HandleForm;
