import React from 'react'

const SecondaryButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
        >{children}
        </button>
    )
}

export default SecondaryButton
