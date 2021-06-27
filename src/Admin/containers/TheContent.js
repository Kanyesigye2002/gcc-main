import React from 'react'
import {Route, Switch} from 'react-router-dom'

// routes config
import routes from '../routers'


const TheContent = () => {
    return (

        <Switch>
            {routes.map((route, idx) => {
                return route.component && (
                    <Route key={idx} path={route.path} exact={route.exact} name={route.name}
                           render={props => (<route.component {...props} />)}
                    />
                )
            })}
        </Switch>
    )
}

export default TheContent
