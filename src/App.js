import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Sermons, ContactUs, Donate, Events, Gallery, Ministries, Home} from "./Pages";
import {FetchEvents, FetchHome, FetchImages, FetchMessages} from "./Redux/MiddleWare";

import './Assets/CSS/style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#121212"
    },
    appBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
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

const App = () => {
    const classes = useStyles(theme);

    console.log(theme)

    return (
        <Router>
            <React.Suspense fallback={
                <CircularProgress color="primary"/>
            }>
                <div className={classes.appBar}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={classes.menuButton} color="inherit"
                                        aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Photos
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Paper className={classes.root}>
                    <Switch>
                        <Route path="/sermons" name="Home" component={Sermons}/>
                        <Route path="/contactUs" name="Home" component={ContactUs}/>
                        <Route path="/donate" name="Home" component={Donate}/>
                        <Route path="/events" name="Home" component={Events}/>
                        <Route path="/gallery" name="Home" component={Gallery}/>
                        <Route path="/ministries" name="Home" component={Ministries}/>
                        <Route path="" name="Home" component={Home}/>
                    </Switch>
                </Paper>

            </React.Suspense>
        </Router>
    );
}

export default App;