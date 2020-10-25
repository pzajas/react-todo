import React, { useState } from 'react'

const App = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const onChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        if (input)
            setList([...list, input])
        else
            alert("Write sth")

        setInput('')
    }

    const onDeleteHandler = (index) => () => {
        let updatedList = [...list]
        updatedList.splice(index, 1);
        setList(updatedList)
    }

    return (
        <div>
            <form className="App" onSubmit={onSubmitHandler}>
                <p>My React To Do List</p>
                <label>Activity : </label>
                <input type="text" value={input} onChange={onChangeHandler} ></input>
                <input type="submit"></input>
            </form>

            {/* <List items={list} onDelete={onDeleteHandler2} /> */}
            <ul>
                {/* {list.map((item, index) => (<li key={item} onClick={() => onDeleteHandler(index)}>{item}</li>))} */}
                {list.map((item, index) => (<li key={item} onClick={onDeleteHandler(index)}>{item}</li>))}
                {/* {list.map((item, index) => (<li key={item} data-index={index} onClick={onDeleteHandler3}>{item}</li>))} */}
                {/* {list.map((item, index) => (<li key={item} onClick={console.log(123)}>{item}</li>))} */}
            </ul>

        </div>
    )
}

export default App