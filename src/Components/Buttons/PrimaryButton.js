import React from "react";

const PrimaryButton = ({ filter, name, clicked }) => {
  return (
    <button
      className={filter === name ? "active" : "inactive"}
      onClick={clicked}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
