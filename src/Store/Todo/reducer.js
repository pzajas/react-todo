import { all } from 'ramda'
import { ALL, ACTIVE, COMPLETED } from '../../Components/Todo/Const'
import {
    SET_FILTER_TYPE,
    SET_FILTERED_TYPE,
    SET_SEARCH_TYPE,
    SET_INPUT_TYPE,
    ADD_TODO_TYPE,
    DELETE_TODO_TYPE,
    COMPLETE_TODO_TYPE
} from './types'

const getFilteredTodos = ({ allTodos, filter, searchTerm }) => {
    let filteredTodos = [...allTodos]

    if (filter === ALL) filteredTodos = filteredTodos.filter((item) => item.text.includes(searchTerm))
    else if (filter === ACTIVE) filteredTodos = filteredTodos.filter((item) => !item.isComplete).filter((item) => item.text.includes(searchTerm))
    else if (filter === COMPLETED) filteredTodos = filteredTodos.filter((item) => item.isComplete).filter((item) => item.text.includes(searchTerm))
    return filteredTodos
}

const initialState = {
    filter: ALL,
    searchTerm: '',
    input: '',
    allTodos: ([]),
    filteredTodos: ([])
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_TYPE: {
            const newState = {...state, filter: action.payload}
            return { ...newState, filteredTodos: getFilteredTodos(newState) }
        }
        case SET_FILTERED_TYPE: {
            return { ...state, filteredTodos: action.payload }
        }

        case SET_SEARCH_TYPE: {
            const newState = { ...state, searchTerm: action.payload }
            return { ...newState, filteredTodos: getFilteredTodos(newState) }
        }

        case ADD_TODO_TYPE: {
            const newState = {...state, allTodos: [...state.allTodos, { id: Date.now(), text: action.payload, isComplete: false }] }
            return { ...newState, filteredTodos: getFilteredTodos(newState) }
        }
        case SET_INPUT_TYPE: {
            return {
                ...state, input: action.payload
            }
        }
        
        case DELETE_TODO_TYPE: {
            const newState = {...state, allTodos: [...state.allTodos.filter(item => item.id !== action.payload)] }
            return { ...newState, filteredTodos: getFilteredTodos(newState) }
        }
        case COMPLETE_TODO_TYPE: {
            const newState = {
                ...state, allTodos: [...state.allTodos.map((todo) => (todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo))]
            }
            return { ...newState, filteredTodos: getFilteredTodos(newState) }
        }

        default: {
            return state
        }
    }
}
