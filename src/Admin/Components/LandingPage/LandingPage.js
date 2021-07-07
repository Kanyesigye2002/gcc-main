import React from 'react';
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";
import CodeSvg from './codeSVG'
import Grid from "@material-ui/core/Grid";
import TeamMember from '../Cards/teamMember'
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

function LandingPage(props) {

    React.useEffect(() => {
        fetchUserData().then((response) => {
            console.log("Logged in")
        }).catch((e) => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (
        <>
            <div>
                <Grid container justify="center" spacing={3}>

                    <Grid item xs={12} container >
                        <Grid item container justify="flex-end" style={{height: "60vh"}}>
                            <Grid item xs={12} sm={6} container justify="center" alignItems="center">
                                <Grid item xs={12} container justify="center" alignItems="center" direction="column">
                                    <Typography variant="h4">
                                        Glorious Church
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Administration
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{height: "60vh"}}>
                                <CodeSvg/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}  container justify="center" style={{padding: "60px 0 0"}}>
                        <Typography variant="h4">
                            Team
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sm={5} md={4} style={{padding: "0 0 10px"}}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={12} spacing={3} container justify="center" alignItems="center">
                        <Grid item xs={12} sm={6} md={4} style={{marginTop: 4}}>
                            <TeamMember/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{marginTop: 4}}>
                            <TeamMember/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{marginTop: 4}}>
                            <TeamMember/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default LandingPage;