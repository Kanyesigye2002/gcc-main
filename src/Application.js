import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

import App from "./App";
import test from "./test";
import Admin from "./Admin/Admin";

import './Assets/CSS/style.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import {createTheme} from '@material-ui/core/styles';

const theme = createTheme();

const background = {
    backgroundColor: theme.palette.mode === 'dark' ? "#000" : "#000",
}
const useStyles = makeStyles(() => ({
    root: {
        width: "100vw",
        borderRadius: 0,
        minHeight: "100vh",
        overflow: "hidden",
    }
}))


const Application = () => {
    const classes = useStyles();



    return (
        <>
            <Router>
                {console.log("Mode", theme.palette.mode === 'dark' ? "#000" : "#fff")}
                {console.log("Mode", theme.palette.mode)}
                {console.log("Mode", theme)}
                <React.Suspense fallback={
                    <Backdrop open={true}>
                        <CircularProgress color="inherit"/>
                    </Backdrop>
                }>
                    <Paper className={classes.root} style={background}>
                        <Switch>
                            <Route path="/admin" name="Home" component={Admin}/>
                            <Route path="/test" name="Home" component={test}/>
                            <Route path="/" name="Home" render={props => <App {...props}/>}/>
                        </Switch>
                    </Paper>
                </React.Suspense>
            </Router>
        </>
    );
}

export default Application;