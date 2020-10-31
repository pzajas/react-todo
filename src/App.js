import React, { useState } from 'react'
import List from './List'

const App = () => {

    const [input, setInput] = useState('')
    const [index, setIndex] = useState([])

    const [isActive, setActive] = useState()

    let id = Date.now()

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if (input.length > 0)
            setIndex([...index, { input, id, isCompleted: false }])

        setInput('')
    }

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const onClickHandler = (id) => (e) => {
        const indexUpdated = index.map(item => item.isCompleted === false && item.id === id ? { ...item, isCompleted: true } : { ...item })

        indexUpdated.sort(function (a, b) { return a.isCompleted - b.isCompleted })

        setIndex(indexUpdated)

        e.stopPropagation()
    }

    const onCompleteHandler = () => {

        const newArray = index.filter(item => item.isCompleted === Boolean(false))

        console.log(newArray)
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
                    className="input"
                    type="text"
                    value={input}
                    placeholder="Type what you want to add"
                    onChange={onChangeHandler}
                >
                </input>
                <input type="submit"></input>
            </form>
            <ul>
                <List
                    items={index}
                    delete={onDeleteHandler}
                    clicked={onClickHandler}

                    complete={onCompleteHandler}
                />
            </ul>
        </div>
    )
}

export default App
