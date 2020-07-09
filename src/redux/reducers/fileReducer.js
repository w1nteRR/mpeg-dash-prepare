import { GET_METADATA, SET_SCANNER_STATUS } from '../constants'

const initialStata = {
    metadata: {},
    convertedFiles: []
}

export const fileReducer = (state = initialStata, action) => {
    switch(action.type) {
        case GET_METADATA: 
            return {
                ...state,
                metadata: state.metadata = action.payload
            }
        case SET_SCANNER_STATUS:
            return {
                ...state,
                convertedFiles: action.payload
            }
        default:
            return state
    }
}