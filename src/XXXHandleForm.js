import React from "react";
import SearchForm from "./SearchForm";
import AddForm from "./AddForm";

const HandleForm = ({ isActive, onSubmit, value, onChange, searchResults }) => {
  if (isActive) {
    return (
      <SearchForm
        value={value}
        onChange={onChange}
        searchResults={searchResults}
      />
    );
  } else return <AddForm onSubmit={onSubmit} />;
};

export default HandleForm;
