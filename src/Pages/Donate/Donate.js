import React, {useState} from 'react';

import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: "#00000000"
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
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
        column: {
            flexBasis: '33.33%',
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

    const change = (event) => {
        setCurrecy(event.target.value)
    }

    const currencies = [
        {value: 'USD', label: '$'},
        {value: 'UGX', label: 'UGX'}
    ]

    return (
        <>
            <img src={image1} style={{width: "100%", borderRadius: "0.25rem"}} alt="Example"/>
            <div className={classes.root}>
                <Accordion defaultExpanded style={{backgroundColor: "#00000000"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1c-content"
                                      id="panel1c-header">
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Donate</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>Donate By Mobile Money</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Grid container justify="center">
                            <Grid container spacing={2} justify="space-evenly" style={{maxWidth: 600}}>
                                <Grid item xs={12} md={8} container spacing={3} style={{border: "1px solid burlywood"}}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="First Name" type="text" name="firstName" variant="filled"
                                                   fullWidth/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Last Name" type="text" name="lastName" variant="filled"
                                                   fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Email Address" type="email" name="email" variant="filled"
                                                   fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Phone Number" type="text" name="phoneNumber"
                                                   variant="filled" fullWidth/>
                                    </Grid>
                                    <Grid item xs={12} container direction="row">
                                        <Grid item xs={3}>
                                            <TextField label="Currency" type="text" name="phoneNumber" variant="filled"
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
                                            <TextField label="Enter Amount" type="text" name="latestVideo"
                                                       variant="filled" fullWidth/>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Reason For Giving" type="text" name="reason" variant="filled"
                                                   fullWidth/>
                                    </Grid>


                                    <Grid container justify="space-between" style={{padding: 10}}>
                                        <Button size="small">Rest Form</Button>
                                        <Button size="small" color="primary">Continue</Button>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} md={2} className={classes.helper} style={{padding: "8px 16px", margin: 20}}>
                                    <Typography variant="caption">
                                        Secured By Weber's Task in Co-operation with FlutterWave
                                        <br/>
                                        <a href="#secondary-heading-and-columns" className={classes.link}>Learn more</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    <Divider/>
                    <Grid container justify="center">
                        <AccordionActions>
                            <Button size="small" color="primary" disabled>Thanks To You All</Button>
                        </AccordionActions>
                    </Grid>
                </Accordion>
            </div>
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
            {/*            <Grid container justify="center">*/}
            {/*                <Grid container spacing={2} justify="space-evenly" style={{maxWidth: 600}}>*/}
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


            {/*                        <Grid container justify="space-between" style={{padding: 10}}>*/}
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
            {/*        <Grid container justify="center">*/}
            {/*            <AccordionActions>*/}
            {/*                <Button size="small" color="primary" disabled>Thanks To You All</Button>*/}
            {/*            </AccordionActions>*/}
            {/*        </Grid>*/}
            {/*    </Accordion>*/}
            {/*</div>*/}
        </>
    );
}
