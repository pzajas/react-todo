import React, { useState } from 'react'

const SearchForm = ({ value, onChange, searchResults }) => {

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)
        console.log(e.target.value);
    }

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     const newArray = todos.filter((d) => {
    //         return d.indexOf(e.target.value) !== -1
    //     });
    // }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                name="text"
                placeholder="search"
                autoComplete='off'

                value={value}
                onChange={onChange}
            />

        </form>
    )
}

export default SearchForm
