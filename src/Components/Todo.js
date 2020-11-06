import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

const Todo = ({ todos, handleComplete, handleDelete }) => {

    // const [edit, setEdit] = useState({
    //     id: null,
    //     test: ''
    // })

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-complete' : 'todo-incomplete'}
            key={index}
        >
            <div
                key={todo.id}
                onClick={() => handleComplete(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => handleDelete(todo.id)}
                    className="delete-item"
                />
                <TiEdit
                />
            </div>
        </div>

    ))


}

export default Todo
