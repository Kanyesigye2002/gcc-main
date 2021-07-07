import React from 'react';

import Grid from "@material-ui/core/Grid";
import {Sermon} from "../../Components";
import {Typography} from "@material-ui/core";

const Sermons = () => {

    return (
        <Grid container>
            <Grid container justifyContent="center">
                <Typography variant="h4">Church Sermons</Typography>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={12} sm={6} lg={4} container justifyContent="center">
                    <Sermon/>
                </Grid>
            </Grid>
        </Grid>
    );


}

export default Sermons;
