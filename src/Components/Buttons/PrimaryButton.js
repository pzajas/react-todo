import React from "react";

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="active"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
