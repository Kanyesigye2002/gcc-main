import React from 'react';
import {TheLayout} from "./containers";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";

function Admin() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/admin/login" component={Login}/>
                    <Route path="/Admin" component={TheLayout}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Admin;