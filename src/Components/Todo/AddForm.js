import React, { useState } from "react";
import SecondaryButton from '../Buttons/SecondaryButton'

const AddForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
      isComplete: false,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        name="text"
        placeholder="add a todo"
        autoComplete="off"
        value={input}
        onChange={handleChange}
      />
      <SecondaryButton onClick={handleSubmit} />
    </form>
  );
};

export default AddForm;
