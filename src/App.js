import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useRoutes } from './hooks/useRoutes'
import { Alert } from './components/shared/styled/Alert'

export const App = () => {
    
    const routes = useRoutes()
    const alert = useSelector(state => state.app.alert)

    return (
        <>
        <Router>
            {routes}
        </Router>

        { alert.type && <Alert text={alert.text} type={alert.type} /> }
        </>
    )
}