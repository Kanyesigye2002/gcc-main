import React from 'react';

import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";

import { Call, Today} from "@material-ui/icons";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    root: {
        padding: 3,
        // backgroundColor: "#000000de",
        color: "#fff"
    },
    media: {
        height: 300,
    },
    buttonRoot: {
        overflow: "hidden",
        height: 250
    }
});

const EventPage = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid spacing={2} container direction="row" justifyContent="center">
                <Grid spacing={2} item xs={12} sm={8} xl={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.event.fileName}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Grid container justifyContent="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5">Event by: {props.event.host}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Event Description</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1">
                                            {props.event.description}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} container justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="h6">Date </Typography>
                                        </Grid>
                                        <Grid item>
                                            <span className="badge rounded-pill"><Today/></span>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p>{props.event.date}</p>
                                    </Grid>
                                    <Grid item xs={12} container justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="h6">Call </Typography>
                                        </Grid>
                                        <Grid item>
                                            <span className="badge rounded-pill"><Call/></span>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p>+256-782 325564</p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </Grid>
            </Grid>
        </>


    );
}

export default EventPage;
