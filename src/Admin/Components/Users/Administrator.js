import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import image from './team.jpg'
import {Typography} from "@material-ui/core";
import {AccountCircle, DeleteSweep, Edit} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import {Url} from "../../../Redux/Url";
import IconButton from "@material-ui/core/IconButton";
import {getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {FetchUsers} from "../../../Redux/MiddleWare";

const useStyles = makeStyles((theme) => ({
    preview: {
        width: "-webkit-fill-available",
        height: "auto",
    },
}));

function TeamMember(props) {

    const classes = useStyles()

    const {admin, setOpenPopup, setData} = props

    const dispatch = useDispatch();

    const deleteAdmin = () => {

        console.log(`${Url}/api/v1/auth/admin/${admin.id}`)

        axios({
            "method":'Delete',
            "url":`${Url}/api/v1/auth/admin/${admin.id}`,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        }).then(() => {
            dispatch(FetchUsers())
        }).catch(error => {
            return "delele"
            // <Alerts>
            //
            // </Alerts>
        })
    }

    return (
        <>
            <Paper>
                <Grid container justify="flex-start" direction="row" spacing={3} style={{padding: 2}}>
                    <Grid item xs={4} container justify="center" alignItems="center" alignContent="center">

                        {
                            admin.image === null && (
                                <AccountCircle className={classes.preview}/>
                            )
                        }
                        {
                            admin.image !== null && (
                                <Avatar
                                    onLoad={() => URL.revokeObjectURL(admin.image)}
                                    alt="gcc"
                                    src={admin.image || "https://via.placeholder.com/250"}
                                    style={{width: "-webkit-fill-available", height: "auto"}}
                                />
                            )
                        }
                    </Grid>
                    <Grid item xs={8} spacing={2} container direction="row">
                        <Grid item xs={12}>
                            <Grid item>
                                <Typography
                                    variant="h5">{admin.firstName || "Glorious Church"} {admin.secondName}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">{admin.username}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{admin.title || "Team Member"}</Typography>
                            </Grid>
                            <Grid item xs={12} style={{border: "1px solid #20202090", borderRadius: 3}}>
                                <Grid item container justify="center">
                                    <Typography variant="subtitle1">Roles</Typography>
                                </Grid>
                                <Grid item container justify="space-around" >
                                    {admin.authorities.map((authority, index) => (
                                        <Grid key={index} item>
                                            <Typography variant="subtitle2">{authority.authority}</Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                        </Grid>
                        {/*<Grid item >*/}
                        {/*    <Typography variant="subtitle2">Explicabo voluptatem mollitia et repellat qui dolorum quasi</Typography>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} container>
                            <Grid item container spacing={3} justify="space-between">
                                <Grid item>
                                    <IconButton onClick={ () => {
                                        setData(admin)
                                        setOpenPopup(true)
                                    }}>
                                        <Edit color="secondary"/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={ () => deleteAdmin()}>
                                        <DeleteSweep color="secondary"/>
                                    </IconButton>
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