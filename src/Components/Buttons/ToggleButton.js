import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const ToggleButton = ({ isActive, onClick, ...props }) => {

  return (
    (isActive ?
      <PrimaryButton
        onClick={onClick}
      > {props.children}
      </PrimaryButton>
      :
      <SecondaryButton
        onClick={onClick}
      > {props.children}
      </SecondaryButton>
    ))

}


export default ToggleButton;
