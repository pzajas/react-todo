import {
    SET_FILTER_TYPE,
    SET_SEARCH_TYPE,
    SET_INPUT_TYPE,
    SET_ADD_TYPE,
    SET_FILTERED_TYPE,

    ADD_TODO_TYPE,
    DELETE_TODO_TYPE,
    COMPLETE_TODO_TYPE
} from './types'

export const setFilter = filter => {
    return { type: SET_FILTER_TYPE, payload: filter }
}
export const setFilteredTodos = filteredTodos => {
    return { type: SET_FILTERED_TYPE, payload: [filteredTodos] }
}

export const setSearchTerm = searchTerm => {
    return { type: SET_SEARCH_TYPE, payload: searchTerm }
}

export const setAllTodos = allTodos => {
    return { type: SET_ADD_TYPE, payload: allTodos }
}

export const addTodo = input => {
    return { type: ADD_TODO_TYPE, payload: input }
}
export const handleDelete = id => {
    return { type: DELETE_TODO_TYPE, payload: id }
}
export const handleComplete = id => {
    return { type: COMPLETE_TODO_TYPE, payload: id }
}
export const setInput = input => {
    return { type: SET_INPUT_TYPE, payload: input }
}