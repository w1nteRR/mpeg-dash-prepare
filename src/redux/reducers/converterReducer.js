import { ACTIVATE_PROCESS, PROGRESS_PERCENT, ADD_CONVERTING_FILE, CONVERTATION_KILL } from "../constants"

const initialState = {
    isRun: false,
    activeProcess: null,
    progress: 0,
    convertingFile: {
        file: null,
        type: null,
        stream: null
    }
}

export const converterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIVATE_PROCESS:
            return {
                ...state,
                isRun: true,
                activeProcess: action.payload
            }
        case PROGRESS_PERCENT:
            return {
                ...state,
                progress: action.payload
            }
        case ADD_CONVERTING_FILE:
            return {
                ...state,
                convertingFile: action.payload
            }
        case CONVERTATION_KILL: 
            return initialState
        default: 
            return state      
    }

}