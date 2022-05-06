import data from '../data/universities'

import { ON_START, ON_SUCCESS } from '../actions'

const initialState = {
universities: data,
loading: false,
error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_START: 
        return {
            ...state,
            loading: true, 
            error: ""
        }
        case ON_SUCCESS:
            return{
                ...state, 
                loading: false,
                universities: action.payload,
                error: ""
            }
        default:
            return(state)
    }
}

export default reducer