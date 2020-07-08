import { SHOW_ALERT, HIDE_ALERT } from "../constants"

const initialState = {
    alert: {
        text: null,
        type: null
    }
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: {}
            }
        default: 
            return state      
    }

}