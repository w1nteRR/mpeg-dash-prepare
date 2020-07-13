import React from 'react'
import { useSelector } from 'react-redux'

import { Alert } from './components/shared/styled/Alert'

import { useRoutes } from './hooks/useRoutes'

export const App = ({ history }) => {

    const alert = useSelector(state => state.app.alert)
    const routes = useRoutes(history)

    return (
        <>
        {routes}
        { alert.type && <Alert text={alert.text} type={alert.type} loader={alert.loader} /> }
        </>
    )
}