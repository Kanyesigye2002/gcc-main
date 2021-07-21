import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import {
    PowerOffOutlined,
    NotificationsNoneOutlined,
    ChatBubbleOutlineOutlined,
    SearchOutlined,
    MenuOutlined
} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#fff',

    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

export default function Header() {

    const classes = useStyles();
    const dispatch = useDispatch()
    const sidebarShow = useSelector(state => state.nav.sidebarShow)

    const toggleSidebar = () => {
        const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
        dispatch({type: 'set', sidebarShow: val})
    }

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
        dispatch({type: 'set', sidebarShow: val})
    }

    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Grid container
                      alignItems="center">
                    <Grid item>
                        <IconButton onClick={() => toggleSidebar()}>
                            <MenuOutlined fontSize="small"/>
                        </IconButton>
                        <IconButton onClick={() => toggleSidebarMobile()}>
                            <MenuOutlined fontSize="small"/>
                        </IconButton>
                    </Grid>
                    <Grid item sm/>
                    <Grid item>
                        <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchOutlined fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneOutlined fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineOutlined fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerOffOutlined fontSize="small"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
