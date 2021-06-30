import React from 'react';
import {Grid, ListItem, makeStyles, Typography} from '@material-ui/core'
import {MenuItems} from '../MenuItems/MenuItems.js';
import logo from "../../Assets/Images/logos/logo-sm.png";
import Controls from '../Controls'
import {Facebook, Call, YouTube} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    linkBtn: {
        border: "0px",
        width: "100%",
        "&$hover": {
            border: "1px solid red"
        }
    },
    footer: {
        borderTop: "1px solid black"
    }
}))

function GccFooter(props) {
    const classes = useStyles()


    return (
        <Grid container>
            <Grid item container spacing={3} xs={12} sm={6} direction="row" justify="center" alignItems="center">
                <Grid item xs={7} container alignContent="center" justify="center">
                    <img src={logo}/>
                </Grid>
                <Grid item xs={12} container alignContent="center" justify="center">
                    <Typography>Welcome to Glorious Church</Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={2}>

                {MenuItems.map((item, index) => (
                    <Grid item xs={6} key={index}>
                        <div style={{padding: "10px", width: "100%"}}>
                            <Controls.Button className={classes.linkBtn}>{item.title}</Controls.Button>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Grid container xs={12} className={classes.footer}>
                <Grid xs={6}><Typography>WebSite by Webers</Typography></Grid>
                <Grid xs={6} container direction="row"justify="flex-end">
                    <Call/>
                    <YouTube/>
                    <Facebook/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default GccFooter;