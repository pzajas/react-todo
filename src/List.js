import React from 'react'


const List = props => (
    <ul>
        {props.items.map((item) => <li className="myLIst" key={item.id} onClick={props.delete(item.id)}>{item.input}</li>)}
    </ul>
)
export default List;

//{index.map((item) => <li key={item.id} onClick={onDeleteHandler(item.id)}>{item.input}</li>)}
// 