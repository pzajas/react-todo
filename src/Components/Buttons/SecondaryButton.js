import React from 'react'

const SecondaryButton = ({ onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
        >{props.children}
        </button>
    )
}

export default SecondaryButton
