import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
    isFriday,
    isMonday, isSaturday, isSunday,
    isThursday,
    isTuesday,
    isWednesday, nextFriday,
    nextMonday, nextSunday,
    nextThursday,
    nextTuesday,
    nextWednesday
} from "date-fns";
import Program from "./Program";

const NextService = () => {


    const Monday = (
        isMonday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Monday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextMonday(new Date())} time={10} title="Monday Evening Service"/></Grid>
            </>

    )

    const Tuesday = (
        isTuesday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Tuesday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextTuesday(new Date())} time={10} title="Tuesday Evening Service"/></Grid>
            </>
    )

    const Wednesday = (
        isWednesday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Mid-Week Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextWednesday(new Date())} time={10}
                                                                              title="Mid-Week Service"/></Grid>
            </>
    )

    const Thursday = (
        isThursday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Thursday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextThursday(new Date())} time={10}
                                                                              title="Thursday Evening Service"/></Grid>
            </>
    )

    const Friday = (
        isFriday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Friday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextFriday(new Date())} time={10} title="Friday Evening Service"/></Grid>
            </>
    )

    const Sunday = (
        isSunday(new Date()) && new Date().getHours() < 13 ?
            <>
                <Grid item xs={12} container justifyContent="center" spacing={2} direction="row">
                    <Grid item xs={12} container justifyContent="center"><Typography  variant="h5" component="h2">Sunday Services</Typography></Grid>
                    <Grid item xs={10}><Divider/></Grid>
                    <Grid item xs={12} sm={6} lg={4}><Program newDate={new Date()} time={8} title="Sunday First Service"/></Grid>
                    <Grid item xs={12} sm={6} lg={4}><Program newDate={new Date()} time={11} title="Sunday Second Service"/></Grid>
                </Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center" spacing={2} direction="row">
                    <Grid item xs={12} container justifyContent="center"><Typography  variant="h5" component="h2">Sunday Services</Typography></Grid>
                    <Grid item xs={10}><Divider/></Grid>
                    <Grid item xs={12} sm={6} lg={4}><Program newDate={nextSunday(new Date())} time={8} title="Sunday First Service"/></Grid>
                    <Grid item xs={12} sm={6} lg={4}><Program newDate={nextSunday(new Date())} time={11} title="Sunday Second Service"/></Grid>
                </Grid>
            </>
    )

    return (
        <>
            <Grid item mt={4} container justifyContent="center" spacing={2}>
                {isMonday(new Date()) && new Date().getHours() < 18 || isSunday(new Date()) && new Date().getHours() >= 13 ? <>{Monday}https://gcc-store.s3.us-east-2.amazonaws.com/Images/</> : <></>}
                {isTuesday(new Date()) && new Date().getHours() < 18 || isMonday(new Date()) && new Date().getHours() >= 18 ? <>{Tuesday}https://gcc-store.s3.us-east-2.amazonaws.com/Images/</> : <></>}
                {isWednesday(new Date()) && new Date().getHours() < 18 || isTuesday(new Date()) && new Date().getHours() >= 18 ? <>{Wednesday}https://gcc-store.s3.us-east-2.amazonaws.com/Images/</> : <></>}
                {isThursday(new Date()) && new Date().getHours() < 18 || isWednesday(new Date()) && new Date().getHours() >= 18 ? <>{Thursday}https://gcc-store.s3.us-east-2.amazonaws.com/Images/</> : <></>}
                {isFriday(new Date()) && new Date().getHours() < 18 || isThursday(new Date()) && new Date().getHours() >= 18 ? <>{Friday}https://gcc-store.s3.us-east-2.amazonaws.com/Images/</> : <></>}
                {isSaturday(new Date()) || isSunday(new Date()) && new Date().getHours() < 13  || isFriday(new Date()) && new Date().getHours() >= 18 ? <>{Sunday}</> : <></>}
            </Grid>
        </>
    );
}

export default NextService;
