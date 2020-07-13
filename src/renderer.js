import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import { App } from './App'

import { history, store } from './redux/store'

ReactDOM.render(
    <Provider store={store} >
        <App history={history} />
    </Provider>
    , document.getElementById('renderer'))


module.hot.accept()