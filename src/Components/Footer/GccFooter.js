import React from 'react';
import {Button, Grid, Hidden, Typography} from '@material-ui/core';
import {MenuItems} from '../MenuItems/MenuItems.js';
import logo from "../../Assets/Images/logos/logo-sm-b.png";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import Footer from "./Footer";

const theme = createTheme();
const useStyles = makeStyles(() => ({
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.mode === 'light' ? "#101010cc" : theme.palette.grey[800],
        boxShadow: "1px -5px 7px -1px rgb(0 0 0 / 20%), 0px -3px 5px 0px rgb(0 0 0 / 14%), 1px -3px 10px 0px rgb(0 0 0 / 12%)"
    },
    linkBtn: {
        borderRadius: 0,
        borderBottom: "0.5px solid #202020A2",
        marginLeft: "5px",
    },
}));

function GccFooter() {

    const classes = useStyles();
    const theme = createTheme()

    return (
        <>
            <footer className={classes.footer}>
                <Grid container style={{margin: "5px 0", borderBottom: "1px solid burlywood"}}>
                    <Grid item container spacing={3} style={{marginTop: "20px"}} xs={12} sm={6} direction="row"
                          justifyContent="center" alignItems="center">
                        <Grid item xs={7} container alignContent="center" justifyContent="center">
                            <img alt="Glorious Church ug" src={logo} style={{maxHeight: 70}}/>
                        </Grid>
                        <Grid item xs={12} container alignContent="center" justifyContent="center">
                            <Typography>Welcome to Glorious Church</Typography>
                        </Grid>
                        <Grid item xs={12} container alignContent="center" justifyContent="center">
                            <Hidden smUp>
                                <iframe title="Church Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.776094264171!2d32.54391671475331!3d0.2636038998076775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd4f3d32d995%3A0x444bed85639cbda8!2sGLORIOUS%20CHURCH%20OF%20CHRIST!5e0!3m2!1sen!2sug!4v1624952809594!5m2!1sen!2sug"
                                        frameBorder="0"
                                        style={{
                                            border: "0",
                                            width: "100%",
                                            maxWidth: "400px",
                                            height: "200px",
                                            borderRadius: "2px"
                                        }}
                                        allowFullScreen=""/>
                            </Hidden>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} sm={6} spacing={2} style={{marginTop: "20px"}}>
                        {MenuItems.map((item, index) => (
                            <Grid item xs={6} key={index} style={{padding: "5px 6px"}}>
                                <Link to={item.url}>
                                    <Button className={classes.linkBtn} fullWidth
                                            variant="outlined">{item.title}</Button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Footer/>
            </footer>
        </>
    );
}

export default React.memo(GccFooter);