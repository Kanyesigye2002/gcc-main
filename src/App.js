import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";


import {Sermons, ContactUs, Donate, Events, Gallery, Ministries, AboutUs, Home} from "./Pages";

import {AppBarGcc} from './Components'

import './Assets/CSS/style.css'
import GccFooter from "./Components/Footer/GccFooter";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#12121200"
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

    return (
        <Router>
            <React.Suspense fallback={
                <CircularProgress color="primary"/>
            }>
                <AppBarGcc/>
                <Container style={{paddingLeft: "2px", paddingRight: "2px"}}>
                    <Box>
                        <Paper className={classes.root}>
                            <Switch>
                                <Route path="/sermons" name="Home" component={Sermons}/>
                                <Route path="/aboutus" name="Home" component={AboutUs}/>
                                <Route path="/contactUs" name="Home" component={ContactUs}/>
                                <Route path="/donate" name="Home" component={Donate}/>
                                <Route path="/events" name="Home" component={Events}/>
                                <Route path="/gallery" name="Home" component={Gallery}/>
                                <Route path="/ministries" name="Home" component={Ministries}/>
                                <Route path="" name="Home" component={Home}/>
                            </Switch>
                        </Paper>
                    </Box>
                </Container>


                <GccFooter/>

            </React.Suspense>
        </Router>
    );
}

export default App;