import React, { useState } from 'react'
import TodoList from '../../Components/TodoList'

const TodoButtonFocus = ({ filter, name, clicked }) => {

    return (
        <button
            className={filter === name ? "active" : "inactive"}
            onClick={clicked}>
            { name}
        </button>
    )
}

export default TodoButtonFocus
