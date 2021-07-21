import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";

import {Event, EventPage} from "../../Components";
import '../../Assets/CSS/Components/Overlay/Overlay.css'
import {createStyles, Dialog, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";


const useStyles = makeStyles(() => createStyles({
    root: {
        display: "contents",
        padding: "0"
    },
    dialogWrapper: {
        padding: "20px 0",
        position: 'absolute',
        minWidth: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center"
    },
    dialogTitle: {
        // padding: '0 50px',
        width: "98%",
        maxWidth: "98%"
    },
    noPadding: {
        overflowX: "hidden",
        overflowY: "auto",
        padding: "0",
        width: "90%"
    }
}));

const Events = () => {

    const classes = useStyles();

    const [openPopup, setOpenPopup] = useState(false)
    const [title, setTitle] = useState("Event Title")

    const [scroll, setScroll] = useState(<></>)

    const events = useSelector(state => state.Events)

    const openNav = (newContent) => {
        setTitle(newContent.title)
        setScroll(<EventPage event={newContent}/>)
        setOpenPopup(true)
    }

    const checkStatus = (date) => {
        const countdownDate = new Date(date).getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;
        return distance <= 10000;

    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} container justifyContent="center" style={{padding: "30px 0 10px"}}>
                    <Typography variant="h4" color="primary">UpComing Events</Typography>
                </Grid>
                <Grid item xs={12} container direction="row">
                    {events.length > 0 ? (
                        events.map((event, index) => {
                            if (checkStatus(event.date)) {
                                return <Grid item xs={12} sm={6} lg={4}>
                                    <Event key={index} event={event} view={openNav}/>
                                </Grid>
                            }
                        }
                    )
                    ) : <><Typography variant="h6" align="center" style={{width: "100%"}}>No UpComing
                    Events</Typography></>
                    }

                </Grid>
                <Grid item xs={12} container justifyContent="center" style={{padding: "30px 0 10px"}}>
                    <Typography variant="h4" color="primary">Successful Events</Typography>
                </Grid>
                <Grid item xs={12} container direction="row">
                    {events.length > 0 ? (
                        events.map((event, index) =>
                            {
                                if (!checkStatus(event.date)) {
                                    return <Grid item xs={12} sm={6} lg={4}>
                                        <Event key={index} event={event} view={openNav}/>
                                    </Grid>
                                }
                            }
                        )
                    ) : <><Typography variant="h6" align="center" style={{width: "100%"}}>No Events to
                        show</Typography></>
                    }
                </Grid>
            </Grid>
            <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
                <DialogTitle className={classes.dialogTitle}>
                    <Grid container justifyContent="space-between">
                        <Grid item xs={10} sm={11} container justifyContent="center">
                            <Typography align="center" variant="h6" component="div"
                                        style={{flexGrow: 1}}>{title}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton style={{width: "30px", minWidth: "30px", height: "30px"}} color="secondary"
                                        onClick={() => {
                                            setOpenPopup(false)
                                        }}><Close/></IconButton>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent dividers className={classes.noPadding}>
                    <>
                        {scroll}
                    </>
                </DialogContent>
            </Dialog>
        </>
    );


}

export default Events;
