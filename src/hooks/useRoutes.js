import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { Info } from '../pages/Info'
import { Main } from '../pages/Main'

export const useRoutes = history => {
    return (
        <ConnectedRouter history={history}>
            <Switch>           
                <Route exact path='/' component={Main} />
                <Route path='/info' component={Info} />
            </Switch>
        </ConnectedRouter>
    )
}