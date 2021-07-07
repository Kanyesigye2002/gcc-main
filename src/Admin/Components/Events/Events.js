import React, {useState} from 'react';

import {Card, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles"
import CardMedia from "../Cards/CardMedia";

import {EventAvailableOutlined} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import {Controls} from "../../../Components";
import Popup from "../Forms/Popup";
import AddEvent from "./AddEvent";
import {useSelector} from "react-redux";
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import Redirect from "react-router-dom/es/Redirect";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Event from "./Event";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {},
    grid: {
        margin: "0px"
    },
    newButton: {
        position: 'absolute',
        right: '0px',
        transition: '2s'
    },
    pageHeader: {
        padding: "5px 0 10px 0",
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {

        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(0.5),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

function Events(props) {

    const classes = useStyles();

    const [openPopup, setOpenPopup] = useState(false)
    const [event, setEvent] = useState({})

    const events = useSelector(state => state.Events)

    // const addOrEdit = (resetForm) => {
    //     resetForm()
    //     setOpenPopup(false)
    // }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            console.log("Logged in")
        }).catch((e) => {
            localStorage.clear();
            return <Redirect to='/admin/login'/>;
        })
    }, [])

    return (
        <div>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>
                    <Grid
                        className={classes.grid}
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        direction="row"
                    >
                        <>
                            {/*<div style={{display: "inline-flex"}}>*/}
                            {/*    <Card className={classes.pageIcon}>*/}
                            {/*        <EventAvailableOutlined fontSize="large"/>*/}
                            {/*    </Card>*/}
                            {/*    <div className={classes.pageTitle} style={{flexGrow: "1"}}>*/}
                            {/*        <Typography*/}
                            {/*            variant="h6"*/}
                            {/*            component="div">*/}
                            {/*            Church Events*/}
                            {/*        </Typography>*/}
                            {/*        <Typography*/}
                            {/*            variant="subtitle2"*/}
                            {/*            component="div">*/}
                            {/*            Events to be held Soon*/}
                            {/*        </Typography>*/}
                            {/*    </div>*/}
                            {/*    <IconButton color="primary"onClick={() => {setOpenPopup(true)}} aria-label="upload picture" component="span">*/}
                            {/*        <AddIcon />*/}
                            {/*    </IconButton>*/}
                            {/*</div>*/}
                        </>
                        <Grid item xs={8} container direction="row">
                            <EventAvailableOutlined fontSize="large"/>
                            <div className={classes.pageTitle}>
                                <Typography
                                    variant="h6"
                                    component="div">
                                    Church Events
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    component="div">
                                    Events to be held Soon
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary" onClick={() => {
                                setOpenPopup(true)
                            }} aria-label="upload picture" component="span">
                                <AddIcon/>
                            </IconButton>
                        </Grid>

                    </Grid>
                </div>
            </Paper>
            <Grid
                className={classes.grid}
                spacing={5}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{width: "100%"}}
            >
                {
                    events.map((event, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={2}>
                            <Event event={event} setEvent={setEvent} setOpenPopup={setOpenPopup}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Popup
                title="Event Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddEvent event={event}/>
            </Popup>
        </div>
    );
}

export default Events;
