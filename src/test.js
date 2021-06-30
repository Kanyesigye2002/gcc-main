import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import {Drawer, List, ListItem, useMediaQuery, useTheme} from "@material-ui/core";
import {MenuItems} from "./Components/MenuItems/MenuItems";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import logo from "./Assets/Images/logos/logo-sm.png";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    drawer: {
        width: 250,
    },
    linkBtn: {
        borderBottom: "0.5px solid #202020A2",
        marginLeft: "5px",
        // "& :hover": {
        //     borderBottom: "0.5px solid Red",
        // }
    }
}));

export default function HideAppBar(props) {

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
                <List>
                    {MenuItems.map((item, index) => (
                        <ListItem button>{item.title}</ListItem>
                        // <ListItem button> <Link to={item.url}>{item.title}</Link></ListItem>
                    ))}
                </List>
            </div>
        </>
    )

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <div className='menu-logo'><img src={logo} alt="" width="100%" height="100%"/></div>
                        <div className={classes.grow}>
                            {isMobile ? (
                                <IconButton onClick={() => tag(true)}>
                                    <MenuIcon/>
                                </IconButton>
                            ) : (
                                <List className={classes.list}>
                                    {MenuItems.map((item, index) => (
                                        <ListItem button className={classes.linkBtn}>{item.title}</ListItem>
                                        // <ListItem button className={classes.linkBtn}> <Link to={item.url}>{item.title}</Link></ListItem>
                                    ))}
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
            <Container>
                <Box my={2}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.Cras justo odio, dapibus ac facilisis in, egestas eget quam.Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </React.Fragment>
    );
}