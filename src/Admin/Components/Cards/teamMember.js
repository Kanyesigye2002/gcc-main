import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import image from './team.jpg'
import {Typography} from "@material-ui/core";
import {Call, Facebook, YouTube, Instagram, Twitter} from "@material-ui/icons";

function TeamMember() {
    return (
        <>
            <Paper>
                <Grid container justifyContent="flex-start" direction="row" spacing={3} style={{padding: 2}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center" alignContent="center">
                        <img src={image} alt="gcc" style={{maxWidth: "-webkit-fill-available", maxHeight: "100%"}}/>
                    </Grid>
                    <Grid item xs={8} spacing={2} container direction="column">
                        <Grid item >
                            <Typography variant="h5">Walter White</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="subtitle1">Chief Executive Officer</Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="subtitle2">Explicabo voluptatem mollitia et repellat qui dolorum quasi</Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item container spacing={3} justifyContent="flex-start">
                                <Grid item>
                                    <a href="/">
                                        <Call color="secondary"/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="/">
                                        <YouTube color="secondary"/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="/">
                                        <Instagram color="secondary"/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="/">
                                        <Twitter color="secondary"/>
                                    </a>
                                </Grid>
                                <Grid item>
                                    <a href="/">
                                        <Facebook color="secondary"/>
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>
        </>
    );
}

export default TeamMember;