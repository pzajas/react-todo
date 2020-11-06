import React, { useState } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Date.now(),
            text: input,
            isComplete: false
        })
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                name="text"
                placeholder="add a todo"

                value={input}
                onChange={handleChange}
            />
            <input
                className="todo-input" type="submit" />
        </form>
    )
}

export default TodoForm
