import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";


import {DonateFlutterWave, ContactUs, Donate, Events, Gallery, Ministries, AboutUs, Home, Programs} from "./Pages";

import {AppBarGcc} from './Components'

import './Assets/CSS/style.css'
import GccFooter from "./Components/Footer/GccFooter";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#12121200"
    },
    rootFooter: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}))

const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <React.Suspense fallback={
                <CircularProgress color="primary"/>
            }>
                <Paper style={{backgroundColor: "#12121200"}}>
                    <div className={classes.rootFooter}>
                        <AppBarGcc/>
                        <CssBaseline/>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} p={2}>
                                <Switch>
                                    <Route path="/programs" name="Home" component={Programs}/>
                                    <Route path="/aboutUs" name="Home" component={AboutUs}/>
                                    <Route path="/contactUs" name="Home" component={ContactUs}/>
                                    <Route path="/donate" name="Home" component={DonateFlutterWave}/>
                                    <Route path="/events" name="Home" component={Events}/>
                                    <Route path="/gallery" name="Home" component={Gallery}/>
                                    <Route path="/ministries" name="Home" component={Ministries}/>
                                    <Route path="" name="Home" component={Home}/>
                                </Switch>
                            </Grid>
                        </Grid>
                        <GccFooter/>
                    </div>
                </Paper>
            </React.Suspense>
        </Router>
    );
}

export default App;