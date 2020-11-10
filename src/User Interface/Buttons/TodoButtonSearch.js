import React from 'react'
import TodoForm from '../Forms/TodoForm'

const TodoButtonSearch = ({ props, search, handle }) => {

    const nameChanger = search === false ? "Add Item" : "Search"

    return (
        <div>
            <button
                className={nameChanger}
                onClick={handle}>{nameChanger}
            </button>

        </div>
    )
}

export default TodoButtonSearch
