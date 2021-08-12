import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {MenuItems} from '../MenuItems/MenuItems.js';
import logo from "../../Assets/Images/logos/logo-sm-b.png";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import { createTheme } from '@material-ui/core/styles';
import Footer from "./Footer";
import {Call, LocationOn, Mail} from "@material-ui/icons";

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
                        <Grid item xs={12} container alignContent="center" justifyContent="center" spacing={1}>
                            <Grid item xs={10}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1">Location: </Typography>
                                    <LocationOn/>
                                </Grid>
                                <Typography variant="subtitle2">Bunamwaya Located 200M from Bunamwaya-Ngobe
                                    Road</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" className="">Email Us: </Typography>
                                    <Mail/>
                                </Grid>
                                <Typography variant="subtitle2">gloriouswebsite@gmail.com</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid item container justifyContent="space-between" alignItems="center">
                                    <Typography variant="subtitle1" className="">Call Us: </Typography>
                                    <Call/>
                                </Grid>
                                <Typography variant="subtitle2">Tel +256-782 325564</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container mt={2} xs={12} sm={6} spacing={2} style={{marginTop: "20px"}}>
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