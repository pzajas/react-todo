import React from "react";

const SearchForm = ({ value, onChange }) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        name="text"
        placeholder="search"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchForm;
