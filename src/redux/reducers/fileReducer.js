import { GET_METADATA, SET_SCANNER_STATUS, SET_AVAILABLE_FILES } from '../constants'

const initialStata = {
    metadata: {},
    availableFiles: {
        video: [],
        audio: [],
        subtitles: []
    }
}

export const fileReducer = (state = initialStata, action) => {
    switch(action.type) {
        case GET_METADATA: 
            return {
                ...state,
                metadata: state.metadata = action.payload
            }
        case SET_AVAILABLE_FILES:
            return {
                ...state,
                availableFiles: action.payload
            }
        default:
            return state
    }
}