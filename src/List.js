import React from 'react'
import Style from './List.css'

const List = props => (
    <div>
        <button onClick={props.complete}>Show Completed</button>
        <ul>
            {props.items.map((item) =>
                <div className="myDiv">
                    <li
                        className={item.isCompleted ? 'activityCompleted' : 'activityOngoing'}
                        key={item.id}
                        onClick={props.delete(item.id)}>
                        {item.input}
                        <button onClick={props.clicked(item.id)}>click</button>
                    </li>
                </div>)}
        </ul>
    </div>

)
export default List;

