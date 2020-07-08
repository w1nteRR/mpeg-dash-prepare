import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import { useRoutes } from './hooks/useRoutes'

export const App = () => {
    
    const routes = useRoutes()

    return (
        <Router>
            {routes}
        </Router>
    )
}