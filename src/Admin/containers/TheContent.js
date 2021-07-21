import React from 'react'
import {Route, Switch} from 'react-router-dom'

// routes config
import routes from '../routers'
import {fetchUserData} from "../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";


const TheContent = () => {

    React.useEffect(() => {
        fetchUserData().then(() => {
        }).catch(() => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (

        <>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component && (
                        <Route key={idx} path={route.path} exact={route.exact} name={route.name}
                               render={props => (<route.component {...props} />)}
                        />
                    )
                })}
            </Switch>
        </>

    )
}

export default TheContent
