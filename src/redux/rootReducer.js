import { combineReducers } from 'redux'

import { fileReducer } from './reducers/fileReducer'

export const rootReducer = combineReducers({
    file: fileReducer
})