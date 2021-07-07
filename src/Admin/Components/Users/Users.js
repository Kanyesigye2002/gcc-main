import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {VerifiedUser} from "@material-ui/icons";
import {makeStyles, Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import AddEvent from "../Events/AddEvent";
import Popup from "../Forms/Popup";
import AddAdmin from "./AddAdmin";
import Administrator from "./Administrator";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "32px 5px"
    }
}))

function Users(props) {
    const classes = useStyles();

    const [data, setData] = useState({})

    const [openPopup, setOpenPopup] = useState(false)

    const admins = useSelector(state => state.Users)

    return (
        <>
            <Grid container justify="center" spacing={2} style={{width: "100%", margin: "3px 0"}}>
                <Grid item xs={12} container justify="space-between" alignItems="center" direction="row">
                    <Grid item xs={10} spacing={2} container justify="flex-start" alignItems="center" direction="row">
                        <VerifiedUser/>
                        <Typography variant="h5">Root Administrator</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton color="primary"onClick={() => {setOpenPopup(true)}} aria-label="upload picture" component="span">
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item container justify="center" spacing={2}>

                    {
                        admins.map((admin, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} style={{marginTop: 15}}>
                                <Administrator setData={setData} setOpenPopup={setOpenPopup} admin={admin}/>
                            </Grid>
                        ))
                    }
                    {/*<Grid item xs={12} sm={6} md={4} style={{marginTop: 15}}>*/}
                    {/*    <Administrator/>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
            <Popup
                title="Add Admin"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <><AddAdmin data={data}/></>
            </Popup>
        </>
    );
}

export default Users;