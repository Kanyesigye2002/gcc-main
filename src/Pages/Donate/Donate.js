import React, {useState} from 'react';

import {createStyles, makeStyles} from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {Grid, TextField} from "@material-ui/core";

import image1 from "../../Assets/Images/giving.jpeg";
import axios from "axios";
import {Url} from "../../Redux/Url";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {Controls} from "../../Components";
import {createTheme} from '@material-ui/core/styles';

const theme = createTheme();
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
            // backgroundColor: "#00000000"
        },
        heading: {
            fontSize: 15,
        },
        secondaryHeading: {
            fontSize: 15,
        },
        icon: {
            verticalAlign: 'bottom',
            height: 20,
            width: 20,
        },
        details: {
            padding: "20px 0px",
            alignItems: 'center',
        },
        helper: {
            borderLeft: `2px solid ${theme.palette.divider}`,
            padding: theme.spacing(1, 2),
        },
        link: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    }),
);

export default function DetailedAccordion() {
    const classes = useStyles();

    const [currency, setCurrecy] = useState('UGX')

    const currencies = [
        {value: 'USD', label: '$'},
        {value: 'UGX', label: 'UGX'}
    ]

    const change = (event) => {
        setCurrecy(event.target.value)
    }

    const [data, setData] = React.useState({});
    const [names1, setName1] = React.useState("");
    const [names2, setName2] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault()

        setData(
            {
                ...data,
                name: `${names1} ${names2}`
            }
        )

        console.log(data)

        setOpen(true);

    }

    const name1 = (event) => {
        setName1(event.target.value)
        setData({
            ...data,
            "name": `${names1} ${names2}`
        })
        console.log(data)
        console.log("name 1: ", event.target.value)
    }

    const name2 = (event) => {
        setName2(event.target.value)
        setData({
            ...data,
            "name": `${names1} ${names2}`
        })
        console.log(data)
        console.log("name 2: ", event.target.value)
    }

    const onChange = (event) => {
        setData({
            ...data,
            "currency": currency,
            [event.target.name]: event.target.value
        })
    }

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {

        axios({
            "method": 'POST',
            "url": `${Url}/api/gcc/v1/give`,
            'data': data
        })
        console.log(data)

        setOpen(false);
    };

    return (
        <>
            <img src={image1} style={{width: "100%", borderRadius: "0.25rem"}} alt="Example"/>
            <div className={classes.root}>
                <Accordion defaultExpanded
                    // style={{backgroundColor: "#00000000"}}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1c-content"
                                      id="panel1c-header">
                        <Typography variant="h6" align="center" noWrap>Donate By Mobile Money</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Grid item container spacing={2} justifyContent="center">
                            <Grid item style={{maxWidth: 400}}>
                                <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
                                    <Grid item container justifyContent="center" style={{border: "1px solid burlywood"}}
                                          p={1}>
                                        <Grid item xs={12} container justifyContent="center" style={{paddingTop: 30}}>
                                            <Grid item xs={6} style={{padding: "0 4px 0 0"}}>
                                                <TextField label="First Name" type="text" name="firstName"
                                                           variant="filled"
                                                           onChange={name1} fullWidth/>
                                            </Grid>
                                            <Grid item xs={6} style={{padding: "0 0 0 4px"}}>
                                                <TextField label="Last Name" type="text" name="lastName"
                                                           variant="filled"
                                                           onChange={name2} fullWidth/>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} style={{paddingTop: 30}}>
                                            <TextField label="Email Address" type="email" name="email" variant="filled"
                                                       onChange={onChange} fullWidth/>
                                        </Grid>
                                        <Grid item xs={12} style={{paddingTop: 30}}>
                                            <TextField label="Phone Number" type="text" name="number"
                                                       variant="filled" onChange={onChange} fullWidth/>
                                        </Grid>
                                        <Grid item xs={12} container spacing={1} direction="row" style={{paddingTop: 30}}>
                                            <Grid item xs={3}>
                                                <TextField label="Currency" type="text" name="currency" variant="filled"
                                                           select value={currency} onChange={change}
                                                           SelectProps={{native: true}}>
                                                    {currencies.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))
                                                    }
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <TextField label="Enter Amount" type="text" name="amount"
                                                           onChange={onChange} variant="filled" fullWidth/>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} style={{paddingTop: 30}}>
                                            <TextField label="Reason For Giving" type="text" name="reason"
                                                       variant="filled"
                                                       onChange={onChange} fullWidth/>
                                        </Grid>
                                        <Grid container justifyContent="space-between" style={{padding: 10}}
                                              style={{paddingTop: 30}}>
                                            <Button size="small">Rest Form</Button>
                                            <Button type="submit" size="small" color="primary">Continue</Button>
                                        </Grid>

                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item className={classes.helper}
                                  style={{padding: "8px 16px", margin: 20}}>
                                <Typography variant="caption">
                                    Secured By Weber's Task in Co-operation with FlutterWave
                                    <br/>
                                    <a href="#secondary-heading-and-columns" className={classes.link}>Learn more</a>
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    <Divider/>
                    <Grid container justifyContent="center">
                        <AccordionActions>
                            <Button size="small" color="primary" disabled>Thanks To You All</Button>
                        </AccordionActions>
                    </Grid>
                </Accordion>
            </div>
            <>
                {/*<div className={classes.root}>*/}
                {/*    <Accordion>*/}
                {/*        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1c-content"*/}
                {/*                          id="panel1c-header">*/}
                {/*            <div className={classes.column}>*/}
                {/*                <Typography className={classes.heading}>Donate</Typography>*/}
                {/*            </div>*/}
                {/*            <div className={classes.column}>*/}
                {/*                <Typography className={classes.secondaryHeading}>Donate By Credit Card</Typography>*/}
                {/*            </div>*/}
                {/*        </AccordionSummary>*/}
                {/*        <AccordionDetails className={classes.details}>*/}
                {/*            <Grid container justifyContent="center">*/}
                {/*                <Grid container spacing={2} justifyContent="space-evenly" style={{maxWidth: 600}}>*/}
                {/*                    <Grid item xs={12} md={8} container spacing={3} style={{border: "1px solid burlywood"}}>*/}
                {/*                        <Grid item xs={12} sm={6}>*/}
                {/*                            <TextField label="First Name" type="text" name="firstName" variant="filled"*/}
                {/*                                       fullWidth/>*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={12} sm={6}>*/}
                {/*                            <TextField label="Last Name" type="text" name="lastName" variant="filled"*/}
                {/*                                       fullWidth/>*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={12}>*/}
                {/*                            <TextField label="Email Address" type="email" name="email" variant="filled"*/}
                {/*                                       fullWidth/>*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={12}>*/}
                {/*                            <TextField label="Phone Number" type="text" name="phoneNumber"*/}
                {/*                                       variant="filled" fullWidth/>*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={12}>*/}
                {/*                            <TextField label="Reason For Giving" type="text" name="reason" variant="filled"*/}
                {/*                                       fullWidth/>*/}
                {/*                        </Grid>*/}
                {/*                        <Grid item xs={12} container direction="row">*/}
                {/*                            <Grid item xs={12} sm={3}>*/}
                {/*                                <TextField label="Currency" type="text" name="phoneNumber" variant="filled"*/}
                {/*                                           select value={currency} onChange={change}*/}
                {/*                                           SelectProps={{native: true}}>*/}
                {/*                                    {currencies.map((option) => (*/}
                {/*                                        <option key={option.value} value={option.value}>*/}
                {/*                                            {option.label}*/}
                {/*                                        </option>*/}
                {/*                                    ))*/}
                {/*                                    }*/}
                {/*                                </TextField>*/}
                {/*                            </Grid>*/}
                {/*                            <Grid item xs={12} sm={9}>*/}
                {/*                                <TextField label="Enter Amount" type="text" name="latestVideo"*/}
                {/*                                           variant="filled" fullWidth/>*/}
                {/*                            </Grid>*/}
                {/*                        </Grid>*/}


                {/*                        <Grid container justifyContent="space-between" style={{padding: 10}}>*/}
                {/*                            <Button size="small">Rest Form</Button>*/}
                {/*                            <Button size="small" color="primary">Continue</Button>*/}
                {/*                        </Grid>*/}

                {/*                    </Grid>*/}
                {/*                    <Grid item xs={12} md={4} className={classes.helper} style={{padding: "8px 16px", marginLeft: 20}}>*/}
                {/*                        <Typography variant="caption">*/}
                {/*                            Secured By Weber's Task in Co-operation with FlutterWave*/}
                {/*                            <br/>*/}
                {/*                            <a href="#secondary-heading-and-columns" className={classes.link}>Learn more</a>*/}
                {/*                        </Typography>*/}
                {/*                    </Grid>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </AccordionDetails>*/}
                {/*        <Divider/>*/}
                {/*        <Grid container justifyContent="center">*/}
                {/*            <AccordionActions>*/}
                {/*                <Button size="small" color="primary" disabled>Thanks To You All</Button>*/}
                {/*            </AccordionActions>*/}
                {/*        </Grid>*/}
                {/*    </Accordion>*/}
                {/*</div>*/}
            </>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {data.subject} - {data.name}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {data.content}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Typography>
                        Email from {data.email}
                    </Typography>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Confirm Message
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
