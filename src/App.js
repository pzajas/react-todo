import React, { useState } from 'react'
import List from './List'

const App = () => {

    const [input, setInput] = useState('')
    const [index, setIndex] = useState([])

    const [color, setColor] = useState({ color: 'green' })

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const id = Date.now()

        if (input.length > 0)
            setIndex([...index, { input, id }])

        setInput('')
    }

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const onDeleteHandler = (id) => () => {
        let newIndex = index.filter(item => item.id !== id)
        setIndex(newIndex)
    }

    return (
        <div>
            <form className="App" onSubmit={onSubmitHandler}>
                <p>MY REACT TO DO LIST</p>
                <label>Activity : </label>
                <input
                    type="text"
                    value={input}
                    placeholder="Type what you want to add"
                    onChange={onChangeHandler}>
                </input>
                <input type="submit"></input>
            </form>
            <ul>
                <List
                    items={index}
                    delete={onDeleteHandler}
                />
            </ul>
        </div>
    )
}
export default App

// {index.map((item) => <li key={item.id} onClick={onDeleteHandler(item.id)}>{item.input}</li>)}