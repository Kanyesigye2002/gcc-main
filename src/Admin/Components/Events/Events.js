import React, {useState} from 'react';

import {Card, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import CardMedia from "../Cards/CardMedia";

import {EventAvailableOutlined} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import {Controls} from "../../../Components";
import Popup from "../Forms/Popup";
import AddEvent from "./AddEvent";
import {useSelector} from "react-redux";


const useStyles = makeStyles(theme => ({
    grid: {
        margin: "0px"
    },
    newButton: {
        position: 'absolute',
        right: '0px',
        transition: '2s'
    },
    pageHeader: {
        padding: "10px 0 50px 0",
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

    const addOrEdit = (resetForm) => {
        resetForm()
        setOpenPopup(false)
    }

    return (
        <div>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>
                    <Grid
                        className={classes.grid}
                        container
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <div style={{display: "inline-flex"}}>
                            <Card className={classes.pageIcon}>
                                <EventAvailableOutlined fontSize="large"/>
                            </Card>
                            <div className={classes.pageTitle} style={{flexGrow: "1"}}>
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
                            <Controls.Button
                                text="Add New"
                                variant="outlined"
                                startIcon={<AddIcon/>}
                                className={classes.newButton}
                                onClick={() => {
                                    setOpenPopup(true)
                                }}
                            />
                        </div>

                    </Grid>
                </div>
            </Paper>
            <Grid
                className={classes.grid}
                spacing={5}
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {
                    events.map((event, index) => (
                        <Grid key={index} xs={12} sm={6} md={4} lg={4} xl={2}>
                            <CardMedia event={event} setEvent={setEvent} setOpenPopup={setOpenPopup}/>
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
