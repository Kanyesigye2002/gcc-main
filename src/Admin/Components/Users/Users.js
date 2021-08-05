import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {VerifiedUser} from "@material-ui/icons";
import { Typography} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Popup from "../Forms/Popup";
import AddAdmin from "./AddAdmin";
import {useSelector} from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import {Link} from "react-router-dom";
import {Controls} from "../../../Components";
import {fetchUserData} from "../../../Redux/AdminReducers/api/authenticationService";
import AdministratorEdit from "./AdministratorEdit";


function Users() {

    const [data, setData] = useState({})
    const [admin, setAdmin] = useState({})

    const [openPopup, setOpenPopup] = useState(false)
    // const [open, setOpen] = useState(false)

    const admins = useSelector(state => state.Users)

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setAdmin(response.data);
        }).catch(() => {
        })
    }, [])

    return (
        <>
            <div>
                {
                    admin.roles !== undefined && admin.roles[admin.roles.length-1].authority === "MASTER-ADMIN" ?
                        <>
                            <Grid container justifyContent="center" spacing={2} style={{width: "100%", margin: "3px 0"}}>
                                <Grid item xs={12} container justifyContent="space-between" alignItems="center" direction="row">
                                    <Grid item xs={10} spacing={2} container justifyContent="flex-start" alignItems="center" direction="row">
                                        <VerifiedUser/>
                                        <Typography variant="h5">Root Administrator</Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton color="primary" onClick={() => {
                                            setData({})
                                            setOpenPopup(true)}
                                        } aria-label="upload picture" component="span">
                                            <AddIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Grid item container justifyContent="center" spacing={2}>

                                    {
                                        admins.map((admin, index) => (
                                            <Grid key={index} item xs={12} sm={6} lg={4} style={{marginTop: 15}}>
                                                <AdministratorEdit setData={setData} setOpenPopup={setOpenPopup} admin={admin} disable={true}/>
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
                        :
                        <>
                            <Backdrop open={true} style={{zIndex: "1400"}}>
                                <Grid container style={{padding: "0 20px"}}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4">Access Denied</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Please Contact the Root Administrator</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Link to="/admin" style={{textDecoration: "none"}}>
                                            <Controls.Button fullWidth type="button">Back To Admin Home</Controls.Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Backdrop>
                        </>
                }
            </div>
        </>
    );
}

export default Users;