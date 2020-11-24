import { SET_FILTER_ACTIVE, SET_FILTER_TYPE } from './types'
import { ACTIVE } from '../../Components/Todo/Const'
import filter from './../../App'


export const setFilter = filter => {
    return { type: SET_FILTER_TYPE, payload: filter }
}

export const setActive = ACTIVE => {
    return { type: SET_FILTER_ACTIVE, payload: ACTIVE }
}


