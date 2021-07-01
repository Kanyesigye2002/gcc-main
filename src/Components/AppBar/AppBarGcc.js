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
        padding: "3px 0"
    },
    drawerList: {
        margin: "20px 5px",
    },
    drawer: {
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
    btnList2: {
        padding: "20px 0 0",
        bottom: 2,
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
                <List className={classes.drawerList}>
                    <ListItem style={{marginBottom: 20}}>
                        <div className='menu-logo'><img src={logo} alt="" width="100%" height="100%"/></div>
                    </ListItem>

                    {MenuItems.map((item, index) =>
                        <>
                            {item.title !== "Donate" && (<>
                                <ListItem key={index} className={classes.item}>
                                    <Link to={item.url} style={{width: "100%"}}>
                                        <Button className={classes.linkBtn} fullWidth
                                                variant="outlined">{item.title}</Button>
                                    </Link>
                                </ListItem>
                            </>)

                            }
                        </>
                    )}

                    <ListItem className={classes.btnList2}>
                        <Link to="/donate" style={{width: "100%"}}>
                            <Button color="primary" variant="contained" fullWidth>Donate</Button>
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
                <AppBar color="#424242">
                    <Toolbar>
                        <div className='menu-logo'><img src={logo} alt="" width="100%" height="100%"/></div>
                        <div className={classes.grow}>
                            {isMobile ? (
                                <IconButton onClick={() => tag(true)}>
                                    <Menu/>
                                </IconButton>
                            ) : (
                                <List className={classes.list}>
                                    {MenuItems.map((item, index) =>
                                        <>
                                            {item.title !== "Donate" &&
                                            (
                                                <ListItem button className={classes.linkBtn1} key={index}> <Link
                                                    to={item.url}>{item.title}</Link></ListItem>
                                            )
                                            }
                                        </>
                                    )}
                                    <ListItem className={classes.btnList2}>
                                        <Link to="/donate" style={{width: "100%"}}>
                                            <Button color="primary" variant="contained" fullWidth>Donate</Button>
                                        </Link>
                                    </ListItem>
                                </List>
                            )}

                        </div>
                    </Toolbar>
                </AppBar>

            </HideOnScroll>
            <Drawer anchor="left" onClose={() => tag(false)} open={drawer}>
                {list()}
            </Drawer>
            <Toolbar/>
        </>
    );
}


export default React.memo(AppBarGcc)