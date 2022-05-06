import data from '../data/universities'

const initialState = {
universities:data,
loading: false,
error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state)
    }
}

export default reducer