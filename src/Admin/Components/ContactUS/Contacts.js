import React, {useState} from 'react';
import {Card, Grid, makeStyles, Paper, Typography, TableRow, TableCell, TableBody, InputAdornment, Toolbar} from "@material-ui/core";
import {MessageOutlined, Search} from "@material-ui/icons";

import useTable from '../Tables/useTable'
import {Controls} from "../../../Components";
import {useSelector} from "react-redux";
import {FetchEvents, FetchHome, FetchImages, FetchMessages} from "../../../Redux/MiddleWare";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
        width: "100%"
    },
    grid: {

    },
    header: {
        '& .container-fluid': {
            width: '100%'
        }
    },
    newButton: {
        position: 'absolute',
        right: '0px',
        marginRight: '40px',
        transition: '2s'
    },
    pageHeader: {
        padding: theme.spacing(1),
        display: 'flex',
        marginBottom: 0
    },
    pageIcon: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        padding: theme.spacing(0.5),
        color: '#3c44b1',
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    },
    searchInput: {
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "100px"
        }
    }
}))

function Contacts(props) {

    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({
        fn: items => {
            return items;
        }
    })

    const [messages, setMessages] = useState([])

    const headerCell = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Name'},
        {id: 'email', label: 'Email'},
        {id: 'subject', label: 'Subject'},
        {id: 'content', label: 'Content'},
    ]

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(messages, headerCell, filterFn)

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value.toLowerCase()))
            }
        })
    }

    return (
        <div>
            <Paper elevation={0} square className={`${classes.header}`}>
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
                                    <MessageOutlined fontSize="large"/>
                                </Card>
                                <div className={classes.pageTitle}>
                                    <Typography
                                        variant="h6"
                                        component="div">
                                        Received Messages
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component="div">
                                        All Messages received by the church
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Controls.Input
                                label="Search Employees"
                                className={classes.searchInput}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        <Search/>
                                    </InputAdornment>)
                                }}
                                onChange={handleSearch}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Grid
                className={classes.grid}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.pageContent}>
                    <TblContainer>
                        <TblHead/>
                        <TableBody>
                            {
                                recordsAfterPagingAndSorting().map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.subject}</TableCell>
                                        <TableCell>{item.content}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TblContainer>
                    <TblPagination/>
                </Paper>
            </Grid>
        </div>
    );
}

export default Contacts;
