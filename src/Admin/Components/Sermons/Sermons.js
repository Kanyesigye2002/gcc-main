import React, {useState} from 'react';
import { Card, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Sermon from "./Sermon";
import {EventAvailableOutlined} from "@material-ui/icons";
import {Controls} from "../../../Components";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../Forms/Popup";
import AddSermon from "./AddSermon";


const useStyles = makeStyles(theme => ({
    grid: {
        margin: "0px"
    },
    newButton: {
        position: 'absolute',
        right: '0px',
        marginRight: '40px',
        transition: '2s'
    },
    pageHeader: {
        padding: theme.spacing(4),
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

function Sermons(props) {
    const items = {title: "Memorial Day", message: "The biggest battle was, as Africans, are facing today is the battle for the very soul of our nation", contributed: "Chris Beam", date : "May 21, 2015", scripture: "Daniel 5:1-31"}

    const classes = useStyles();

    const [openPopup, setOpenPopup] = useState(false)
    
    return (
        <div style={{width: "100%"}}>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>
                    <Grid
                        className={classes.grid}
                        container
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid xs={12} sm={8} direction="column" style={{marginBottom: "20px"}}>
                            <div style={{display: "inline-flex"}}>
                                <Card className={classes.pageIcon}>
                                    <EventAvailableOutlined fontSize="large"/>
                                </Card>
                                <div className={classes.pageTitle}>
                                    <Typography
                                        variant="h6"
                                        component="div">
                                        Church Sermons
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component="div">
                                        Sermon published By the Church
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4} direction="column" style={{marginBottom: "20px"}}>
                            <Controls.Button
                                text="Add New"
                                variant="outlined"
                                startIcon={<AddIcon/>}
                                className={classes.newButton}
                                onClick={() => {
                                    setOpenPopup(true)
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Grid
                className={classes.grid}
                spacing={5}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid xs={12} md={6} lg={4}>
                    <Sermon/>
                </Grid>
            </Grid>
            <Popup
                title="Event Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddSermon/>
            </Popup>
        </div>
    );
}

export default Sermons;
