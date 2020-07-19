import React from 'react'
import { Switch, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { Info } from '../pages/Info'
import { Main } from '../pages/Main'
import { Ffmpeg } from '../pages/Ffmpeg'
import { Gpac } from '../pages/Gpac'

import { NavBar } from '../components/Navigation/Nav.bar'

const MainStack = () =>
    <>
    <NavBar />
    <Switch>
        <Route path='/main/info' component={Info} />
        <Route path='/main/ffmpeg' component={Ffmpeg} />
        <Route path='/main/gpac' component={Gpac} />
    </Switch>
    </>

export const useRoutes = history => {
    return (
        <ConnectedRouter history={history}>
            <Switch>           
                <Route exact path='/' component={Main} />
                <Route path='/main' component={MainStack} />
            </Switch>
        </ConnectedRouter>
    )
}