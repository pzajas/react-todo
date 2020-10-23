import React from 'react'

const List = props => (
    <ul>
        {props.items.map((item, index) => <li key={index}>{item}<button>sd</button></li>)}
    </ul>
)
export default List;