import React, {useState} from 'react';

import {makeStyles} from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import {useDispatch, useSelector} from "react-redux";
import {TheContent} from "./index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Controls} from "../../Components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import logo from "https://gcc-store.s3.us-east-2.amazonaws.com/Images/logos/logo-sm.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import {fetchUserData} from "../../Redux/AdminReducers/api/authenticationService";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() => ({
    list: {
        width: 250,
    },
    logo: {},
    fullList: {
        width: 'auto',
    },
    appBar: {
        margin: "0 0 25px",
        flexGrow: 1,
        color: "#fff",
        backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        boxShadow: "1px -5px 7px -1px rgb(0 0 0 / 20%), 0px -3px 5px 0px rgb(0 0 0 / 14%), 1px -3px 10px 0px rgb(0 0 0 / 12%)"
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        padding: " 5px 0"
    },
}));


export default function TheLayOut(props) {
    const classes = useStyles();

    const dispatch = useDispatch()
    const state = useSelector(state => state.nav)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch({type: 'set', payload: {...state, [anchor]: open}})
    };

    const list = (anchor) => (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(anchor, false)}
             onKeyDown={toggleDrawer(anchor, false)}>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} container justifyContent="center">
                    <img src={logo} alt="" className={classes.logo}/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: 20}}>
                    <Divider/>
                </Grid>
                <Grid container style={{padding: "0 20px"}} spacing={2}>
                    <Grid item xs={12}>
                        <Link to="/admin" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Admin Dashboard</Controls.Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/admin/EditHome" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Home</Controls.Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/admin/ContactUs" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Messages</Controls.Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/admin/Events" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Events</Controls.Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/admin/AddImage" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Add Images</Controls.Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/admin/administrators" style={{textDecoration: "none"}}>
                            <Controls.Button fullWidth type="button">Root Admin</Controls.Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );

    const user = localStorage.getItem("USER_KEY")

    const [data, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch(() => {
            localStorage.clear();
            props.history.push('/admin/login');
        })
    }, [])

    React.useEffect(() => {
        if (user === null) {
            localStorage.clear();
            props.history.push('/admin/login');
        }
    }, [])

    const logOut = () => {

        localStorage.clear();
        props.history.push('/admin/login');

    }

    return (
        <>
            {user === null ? <>
                <Backdrop open={true}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </> : <>
                <div>
                    <AppBar position="static" className={classes.appBar}>
                        <Toolbar variant="dense">
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item xs={4} container direction="row" alignItems="center" justifyContent="flex-start">
                                    <IconButton edge="start" onClick={toggleDrawer('left', true)}
                                                className={classes.menuButton}
                                                color="inherit" aria-label="menu">
                                        <MenuIcon/>
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        {data.userName}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button type="button" color="inherit" onClick={() => logOut()}>Log Out</Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
                <TheContent/>

            </>}

        </>
    );
}

