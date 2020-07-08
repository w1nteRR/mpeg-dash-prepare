import ReactDOM from 'react-dom'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { App } from './App'

import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('renderer'))
