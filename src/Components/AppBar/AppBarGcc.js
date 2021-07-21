import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {
    IconButton,
    Drawer,
    Slide,
    useScrollTrigger,
    CssBaseline,
    Toolbar,
    AppBar,
    List,
    ListItem,
    useMediaQuery,
    Button
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles"
import {MenuItems} from "../MenuItems/MenuItems";
import { MoreVert} from '@material-ui/icons'
import logo from "../../Assets/Images/logos/logo-sm.png";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();
function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles(() => ({
    appBar: {
        flexGrow: 1,
        color: "#fff",
        backgroundColor:
            theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    grow: {
        // padding: "0 30px",
        // flexGrow: 1,
        // display: "flex",
        // justifyContent: "flex-end",
        // alignItems: "center",
    },
    list: {
        display: "flex",
    },
    item: {
        padding: "3px"
    },
    drawerList: {
        margin: "20px 5px",
    },
    drawer: {
        paddingTop: 20,
        width: 250,
    },
    linkBtn: {
        borderRadius: 0,
        borderBottom: "0.5px solid #202020A2",
        marginLeft: "5px",
    },
    linkBtn1: {
        borderBottom: "0.5px solid #202020A2",
        marginLeft: "5px",
    },
    draw: {
        backgroundColor: "#585858",
    }
}));

function AppBarGcc(props) {

    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const theme = createTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    const tag = (open) => {
        console.log(drawer)
        setDrawer(open)
    }

    const list = () => (
        <>
            <div onClick={() => tag(false)} className={classes.drawer}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={12} container justifyContent="center">
                        <img src={logo} alt=""/>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom: 2}}>
                        <Divider/>
                    </Grid>
                </Grid>
                <List className={classes.drawerList}>
                    {MenuItems.map((item, index) =>
                        <React.Fragment key={index}>
                            {item.title !== "Donate" && (<>
                                <ListItem className={classes.item}>
                                    <Link to={item.url} style={{width: "100%"}}>
                                        <Button className={classes.linkBtn} fullWidth
                                                variant="text">{item.title}</Button>
                                    </Link>
                                </ListItem>
                            </>)

                            }
                        </React.Fragment>
                    )}

                    <ListItem className={classes.item}>
                        <Link to="/donate" style={{width: "100%"}}>
                            <Button fullWidth color="primary" variant="contained">Donate</Button>
                        </Link>
                    </ListItem>
                </List>
            </div>
        </>
    )

    return (
        <>
            <CssBaseline/>
            <HideOnScroll {...props}>

                <AppBar className={classes.appBar}>
                    <Toolbar>{console.log(theme)}
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item container alignItems="center" style={{width: "fit-content"}}>
                                <div style={{maxHeight: 50}}><img src={logo} alt="" style={{maxHeight: 50, opacity: "0.8"}}/></div>
                            </Grid>
                            <Grid item>
                                <div className={classes.grow}>
                                    {isMobile ? (

                                        <>
                                            {/*<MenuIcon click={() => {*/}
                                            {/*    tag(true)*/}
                                            {/*    console.log("tag",drawer)*/}
                                            {/*}} open={drawer}/>*/}
                                            <IconButton
                                                aria-label="more"
                                                aria-controls="long-menu"
                                                aria-haspopup="true"
                                                color="primary"
                                                onClick={() => {tag(true)}}
                                            >
                                                <MoreVert />
                                            </IconButton>
                                            {/*<IconButton onClick={() => {tag(true)}} color="primary" aria-label="upload picture" component="span">*/}
                                            {/*    <Menu />*/}
                                            {/*</IconButton>*/}
                                        </>
                                    ) : (
                                        <List className={classes.list}>
                                            {MenuItems.map((item, index) =>
                                                <React.Fragment key={index}>
                                                    {item.title !== "Donate" &&
                                                    (
                                                        <ListItem style={{padding: "2px 2px"}}>
                                                            <Link to={item.url}>
                                                                <Button size="small" variant="outlined" style={{backgroundColor: "00000000"}}>
                                                                    {item.title}
                                                                </Button>
                                                            </Link>
                                                        </ListItem>
                                                    )
                                                    }
                                                </React.Fragment>
                                            )}
                                            <ListItem>
                                                <Link to="/donate" style={{width: "100%"}}>
                                                    <Button color="primary" variant="contained" fullWidth>Donate</Button>
                                                </Link>
                                            </ListItem>
                                        </List>
                                    )}

                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

            </HideOnScroll>
            <Drawer anchor="left" classes={{paper: classes.draw}} onClose={() => tag(false)} open={drawer}>
                {list()}
            </Drawer>
            <Toolbar/>
        </>
    );
}


export default React.memo(AppBarGcc)