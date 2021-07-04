import React, {useState} from 'react';
import {
    Card,
    Grid,
    makeStyles,
    Paper,
    Typography,
    TableRow,
    TableCell,
    TableBody,
    InputAdornment
} from "@material-ui/core";
import {CreditCardOutlined, Search} from "@material-ui/icons";

import useTable from '../Tables/useTable'
import {Controls} from "../../../Components";

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
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom: theme.spacing(0)
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

function DonateCreditCard(props) {

    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({
        fn: items => {
            return items;
        }
    })

    const messages = [
        {
            id: 1,
            name: "Kanye Allan",
            email: "kanyeallan@gmail.com",
            phone: "0752331807",
            cardNo: "0752331807845659",
            cvv: "807",
            card: "PayPal",
            amount: "11000000.00"
        }
    ]

    const headerCell = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Name'},
        {id: 'email', label: 'Email'},
        {id: 'phone', label: 'Phone No.'},
        {id: 'cardNo', label: 'Card No'},
        {id: 'cvv', label: 'CVV'},
        {id: 'card', label: 'Card Payment'},
        {id: 'amount', label: 'Amount'},
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
                    return items.filter(x => x.FirstName.toLowerCase().includes(target.value.toLowerCase()))
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
                                    <CreditCardOutlined fontSize="large"/>
                                </Card>
                                <div className={classes.pageTitle}>
                                    <Typography
                                        variant="h6"
                                        component="div">
                                        Mobile Money Transactions
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component="div">
                                        All Transactions via Mobile Money
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
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.cardNo}</TableCell>
                                        <TableCell>{item.cvv}</TableCell>
                                        <TableCell>{item.card}</TableCell>
                                        <TableCell>{item.amount}</TableCell>
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

export default DonateCreditCard;

