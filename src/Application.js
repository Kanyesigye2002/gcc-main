import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";

import App from "./App";
import test from "./test";
import Admin from "./Admin/Admin";

import './Assets/CSS/style.css'
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Call, Facebook, Instagram, Twitter, YouTube} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    root: {
        width: "100vw",
        borderRadius: 0,
        minHeight: "90vh",
        backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900],
        // backgroundColor: "#252525"
    },

    appBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        boxShadow: "1px -5px 7px -1px rgb(0 0 0 / 20%), 0px -3px 5px 0px rgb(0 0 0 / 14%), 1px -3px 10px 0px rgb(0 0 0 / 12%)"
    },
    rootFooter: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        padding: "0 0 10px",
    },
}))

function Copyright() {
    return (
        <Typography variant="subtitle2" color="textSecondary" style={{textAlign: "end"}}>
            {'Copyright © '}
            <Link color="inherit" href="https://gloriousch.org/">
                Glorious Ch
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const Application = () => {
    const classes = useStyles();

    return (
        <>
            <Router>
                <React.Suspense fallback={
                    <Backdrop open={true}>
                        <CircularProgress color="inherit"/>
                    </Backdrop>
                }>
                    <div style={{overflow: "hidden"}}>

                        <Paper className={classes.root}>
                            <div className={classes.rootFooter}>
                                <CssBaseline/>
                                <div className={classes.main}>
                                    <Switch>
                                        <Route path="/admin" name="Home" component={Admin}/>
                                        <Route path="/test" name="Home" component={test}/>
                                        <Route path="/" name="Home" render={props => <App {...props}/>}/>
                                    </Switch>
                                </div>
                                <footer className={classes.footer}>
                                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                        <Grid xs={5} item container spacing={1} justifyContent="flex-start">
                                            <Grid item>
                                                <a href="#home">
                                                    <Call color="secondary"/>
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a href="#company">
                                                    <YouTube color="secondary"/>
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a href="#company">
                                                    <Twitter color="secondary"/>
                                                </a>
                                            </Grid>
                                            <Grid item>
                                                <a href="#portfolio">
                                                    <Facebook color="secondary"/>
                                                </a>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Copyright/>
                                        </Grid>
                                    </Grid>
                                </footer>
                            </div>
                        </Paper>
                    </div>
                </React.Suspense>
            </Router>
        </>
    );
}

export default Application;