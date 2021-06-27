import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";

import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import App from "./App";
import Admin from "./Admin/Admin";
import {FetchEvents, FetchHome, FetchImages, FetchMessages} from "./Redux/MiddleWare";

import './Assets/CSS/style.css'
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#121212"
    },

    appBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    h2: {
        color: "#343212"
    }
}))

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25',
            contrastText: '#fff',
        },
        secondary: {
            light: '#5393ff',
            main: '#2979ff',
            dark: '#1c54b2',
            contrastText: '#000',
        },
    },
})

const Application = (props) => {
    const classes = useStyles(theme);

    console.log(theme)

    const dispatch = useDispatch();

    React.useEffect(() => dispatch(FetchImages()), [])
    React.useEffect(() => dispatch(FetchHome()), [])
    React.useEffect(() => dispatch(FetchEvents()), [])
    React.useEffect(() => dispatch(FetchMessages()), [])

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <React.Suspense fallback={
                    <CircularProgress color="primary"/>
                }>
                    <Paper className={classes.root}>
                        <Switch>
                            <Route path="/admin" name="Home" component={Admin}/>
                            <Route path="/" name="Home" render={props => <App {...props}/>}/>
                        </Switch>
                    </Paper>
                </React.Suspense>
            </Router>
        </ThemeProvider>
    );
}

export default Application;