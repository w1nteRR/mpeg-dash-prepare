import { ACTIVATE_PROCESS, PROGRESS_PERCENT } from "../constants"

const initialState = {
    isRun: false,
    activeProcess: null,
    progress: 0
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
        default: 
            return state      
    }

}