import { combineReducers } from 'redux'

import { fileReducer } from './reducers/fileReducer'
import { converterReducer } from './reducers/converterReducer'
import { appReducer } from './reducers/appReducer'

export const rootReducer = combineReducers ({
    file: fileReducer,
    converter: converterReducer,
    app: appReducer
})