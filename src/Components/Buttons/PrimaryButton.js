import React from "react";

const PrimaryButton = ({ onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="active"
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
