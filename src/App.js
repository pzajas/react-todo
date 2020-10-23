import React, { useState } from 'react';
import List from './List'

const App = () => {

  const [activity, setActivity] = useState('')
  const [array, setArray] = useState([])

  const onChangeHandler = (event) => setActivity(event.target.value)

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if (activity.length > 0)
      setArray([...array, activity])
    else
      alert('Write something before trying to add please!')

    setActivity('')
  }

  return (
    <div>
      <form className="App" onSubmit={onSubmitHandler}>
        <p>My React To Do List</p>
        <label>Activity :</label>
        <input type="text" value={activity} onChange={onChangeHandler}></input>
        <input type="submit"></input>
      </form>
      <List items={array} />
    </div>
  )
}
export default App