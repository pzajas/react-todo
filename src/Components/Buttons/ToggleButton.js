import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ToggleButton = ({ isActive, onClick, children }) => {

  return (
    (isActive ?
      <PrimaryButton
        onClick={onClick}
      > {children}
      </PrimaryButton>
      :
      <SecondaryButton
        onClick={onClick}
      > {children}
      </SecondaryButton>
    ))

}

export default ToggleButton;
