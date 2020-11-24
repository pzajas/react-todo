import { ALL, COMPLETED, ACTIVE } from '../../Components/Todo/Const'
import { SET_FILTER_ACTIVE, SET_FILTER_TYPE } from './types'

const initialState = {
    filter: ALL,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_TYPE: {
            return { ...state, filter: action.payload }
        }
        case SET_FILTER_ACTIVE: {
            return { ...state, onClick: action.payload }
        }
        default: {
            return state
        }
    }
}
