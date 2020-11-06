import React, { useState } from 'react'
import { RiFunctionFill } from 'react-icons/ri'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const [main, setMain] = useState([])

    const handleAdd = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)

    }

    const handleComplete = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const handleActive = () => {

        const copy = [...todos].filter(item => item.isComplete === false)

        const xxx = copy.splice({ isComplete: false })

        setMain(xxx)

        console.log(main)
        // console.log(copy, 'aaa')
        //console.log(xxx, 'zzz')
        console.log(todos)
    }

    const handleDelete = id => {
        const todoDeleted = [...todos].filter(item => item.id !== id)

        setTodos(todoDeleted)
    }

    return (
        <div>
            <h4>MY REACT TODO LIST</h4>
            <TodoForm
                onSubmit={handleAdd} />
            <button
                onClick={handleActive}>Active</button>
            <Todo
                todos={todos}

                handleComplete={handleComplete}
                handleDelete={handleDelete}
            />

        </div>
    )
}

export default TodoList
