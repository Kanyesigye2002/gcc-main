import React from 'react';

import {Grid} from "@material-ui/core";
import {Instagram, Facebook, Twitter, YouTube} from "@material-ui/icons";
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
                            <a href="https://www.instagram.com/gloriouschurchofchristug/">
                                <Instagram color="secondary"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.youtube.com/channel/UCnSTVCj5cCr0XIGUFQu1yqw">
                                <YouTube color="secondary"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.twitter.com/gloriouschug">
                                <Twitter color="secondary"/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="https://www.facebook.com/GloriousChurchOfChristMinistries">
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