import { GET_METADATA } from '../constants'

const initialStata = {
    metadata: {}
}

export const fileReducer = (state = initialStata, action) => {
    switch(action.type) {
        case GET_METADATA: 
            return {
                ...state,
                metadata: state.metadata = action.payload
            }
        default:
            return state
    }
}