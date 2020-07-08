import React from 'react'
import { Switch, Route } from 'react-router'

import { Info } from '../pages/Info'
import { Main } from '../pages/Main'

export const useRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/info' component={Info} />
        </Switch>
    )
}