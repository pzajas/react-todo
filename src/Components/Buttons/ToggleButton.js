import React from "react";

const ToggleButton = ({ isActive, onClick }) => {
  const nameChanger = isActive === false ? "Add Todo" : "Search";

  return (
    <button
      className={nameChanger}
      onClick={onClick}>
      {nameChanger}
    </button>
  );
};

export default ToggleButton;
