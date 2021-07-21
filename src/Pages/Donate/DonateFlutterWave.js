import React from 'react';
import DonateButton from "./srce/DonateButton";

import image from "../../Assets/Images/give/give1.jpeg";
import image1 from "../../Assets/Images/giving.jpeg";
import {Divider, Grid, Typography} from "@material-ui/core";
import {Call, CreditCard, Payments} from "@material-ui/icons";

export default function DonateFlutterWave() {

    return (
        <>
            <Grid container justifyContent="center" spacing={1}>
                <Grid item xs={12} container justifyContent="center">
                    <img src={image} style={{width: "100%", borderRadius: "0.25rem"}} alt="Example"/>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="h2">Give Online</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="h6">Come Support Our Works</Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <DonateButton/>
                </Grid>
                <Grid item xs={10}>
                    <Divider style={{height: 1}}/>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Typography variant="h4">Give Using Off line</Typography>
                </Grid>
                <Grid item xs={10} container justifyContent="space-between" spacing={1}>
                    <Typography>Give in direct to our mobile money</Typography>
                    <Grid item xs={12}>
                        <Divider style={{height: 1}}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>0752331807</Typography>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <Call/>
                    </Grid>
                    <Typography>Give in direct to our Credit Card</Typography>
                    <Grid item xs={12}>
                        <Divider style={{height: 1}}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>522511000176388</Typography>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <CreditCard/>
                    </Grid>
                    <Typography>Give in direct to our Voucher</Typography>
                    <Grid item xs={12}>
                        <Divider style={{height: 1}}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>4650752331807</Typography>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <Payments/>
                    </Grid>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                </Grid>
            </Grid>
        </>
    );
}
