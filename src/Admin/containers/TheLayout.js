import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
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
import logo from "../../Assets/Images/logos/logo-sm.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    logo: {

    },
    fullList: {
        width: 'auto',
    },
    appBar: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
            <Grid container justify="center">
                <Grid item xs={12} container justify="center">
                    <img src={logo} alt="" className={classes.logo}/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: 20}}>
                    <Divider/>
                </Grid>
                <Grid container style={{padding: "0 20px"}}>
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
                </Grid>
            </Grid>
        </div>
    );

    const user = localStorage.getItem("USER_KEY")

    React.useEffect(() => {

        if (user===null) {
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
            {user===null? <>
                <Backdrop className={classes.backdrop} open={true}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </>:<>
                <div className={classes.appBar}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton}
                                    color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Gcc Admin
                        </Typography>
                        <Button type="button" onClick={() => logOut()}>Log Out</Button>
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

