import { all } from 'ramda'
import { ALL } from '../../Components/Todo/Const'
import {
    SET_FILTER_TYPE,
    SET_FILTERED_TYPE,
    SET_SEARCH_TYPE,
    SET_INPUT_TYPE,
    ADD_TODO_TYPE,
    DELETE_TODO_TYPE,
    COMPLETE_TODO_TYPE
} from './types'


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
            return { ...state, filter: action.payload }
        }
        case SET_FILTERED_TYPE: {
            return { ...state, filteredTodos: action.payload }
        }

        case SET_SEARCH_TYPE: {
            return { ...state, searchTerm: action.payload }
        }
        case ADD_TODO_TYPE: {
            return {
                ...state, allTodos: [...state.allTodos, { id: Date.now(), text: action.payload, isComplete: false }]
            }
        }
        case SET_INPUT_TYPE: {
            return {
                ...state, input: action.payload
            }
        }
        case DELETE_TODO_TYPE: {
            return {
                ...state, allTodos: [...state.allTodos.filter(item => item.id !== action.payload)]
            }
        }
        case COMPLETE_TODO_TYPE: {
            return {
                ...state, allTodos: [...state.allTodos.map((todo) =>
                    (todo.id === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo))]
            }
        }

        default: {
            return state
        }
    }
}
