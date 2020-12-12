import React, { useState } from "react"
import { connect } from "react-redux"
import { setInput } from '../../Store/Todo/actions'
import { addTodo } from '../../Store/Todo/actions'
import SecondaryButton from '../Buttons/SecondaryButton'

const AddForm = ({ input, setInput, addTodo }) => {

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(
      input
    );
    setInput("");
  };

  const handleChange = e => {
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
      <SecondaryButton
        onClick={handleSubmit}>
        Submit
      </SecondaryButton>
    </form>
  );
};

const mapStateToProps = ({ todo }) => ({
  input: todo.input
});

const mapDispatchToProps = {
  setInput,
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)