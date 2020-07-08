import { SHOW_ALERT, HIDE_ALERT } from "../constants";

export const hideAlert = () => ({
    type: HIDE_ALERT
})

export const showAlert = (text, type) => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: {
            text,
            type
        }
    })

    setTimeout(() => {
        dispatch(hideAlert())
    }, 2500)
}