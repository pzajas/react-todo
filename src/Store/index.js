import { createStore, combineReducers } from 'redux'
import todoReducer from './Todo/reducer';

const store = createStore(
    combineReducers({
        todo: todoReducer
    })
)

export default store