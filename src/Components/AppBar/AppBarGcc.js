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
    useTheme,
    makeStyles,
    Button
} from "@material-ui/core";
import {MenuItems} from "../MenuItems/MenuItems";
import {Menu} from '@material-ui/icons'
import logo from "../../Assets/Images/logos/logo-sm.png";
import logoBlue from "../../Assets/Images/logos/logo-sm-b.png";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "./MenuIcon";

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

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
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

    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const tag = (open) => {
        console.log(drawer)
        setDrawer(open)
    }

    const list = () => (
        <>
            <div onClick={() => tag(false)} className={classes.drawer}>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} container justify="center">
                        <img src={logo} alt="" className={classes.logo}/>
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
                <AppBar color="primary">
                    <Toolbar>
                        <div style={{maxHeight: 50}}><img src={logoBlue} alt="" style={{maxHeight: 50}}/></div>
                        <div className={classes.grow}>
                            {isMobile ? (
                                <MenuIcon click={() => {
                                    tag(true)
                                    console.log("tag",drawer)
                                }} open={drawer}/>
                            ) : (
                                <List className={classes.list}>
                                    {MenuItems.map((item, index) =>
                                        <React.Fragment key={index}>
                                            {item.title !== "Donate" &&
                                            (
                                                <ListItem className={classes.item}>
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
                                    <ListItem className={classes.btnList2}>
                                        <Link to="/donate" style={{width: "100%"}}>
                                            <Button color="secondary" variant="contained" fullWidth>Donate</Button>
                                        </Link>
                                    </ListItem>
                                </List>
                            )}

                        </div>
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