import React from 'react';

import {Grid} from "@material-ui/core";
import {Call, Facebook, Twitter, YouTube} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {createTheme} from "@material-ui/core/styles";

function Copyright() {
    return (
        <Typography variant="subtitle2" color="textSecondary" style={{textAlign: "end"}}>
            {'Copyright © '}
            <a color="inherit" href="/admin">
                Glorious Ch
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const Application = () => {
    const theme = createTheme()
    return (
        <>

            <footer>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid xs={5} item container spacing={1} justifyContent="flex-start">
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
                                <Twitter color="secondary"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="/">
                                <Facebook color="secondary"/>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Copyright/>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}

export default Application;