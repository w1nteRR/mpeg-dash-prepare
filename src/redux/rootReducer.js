import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { fileReducer } from './reducers/fileReducer'
import { converterReducer } from './reducers/converterReducer'
import { appReducer } from './reducers/appReducer'

export const rootReducer = history => 
    combineReducers({
        router: connectRouter(history),
        file: fileReducer,
        converter: converterReducer,
        app: appReducer
    })

