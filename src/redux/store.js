import { createStore, applyMiddleware, compose } from 'redux'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

export const history = createHashHistory()

export const store = createStore(rootReducer(history), compose(
    applyMiddleware(
        thunk,
        routerMiddleware(history)
    )
))