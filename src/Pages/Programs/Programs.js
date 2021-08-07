import React from 'react';
import {
    isFriday,
    isMonday,
    isSaturday,
    isSunday,
    isThursday,
    isTuesday,
    isWednesday, nextFriday,
    nextMonday,
    nextSunday, nextThursday, nextTuesday, nextWednesday
} from "date-fns";
import {Grid, Typography} from "@material-ui/core";
import Program from "../../Components/Cards/Program";
import Divider from "@material-ui/core/Divider";
import {Iframe} from "../../Components";
import Button from "@material-ui/core/Button";
import {YouTube} from "@material-ui/icons";

function Programs() {

    const Monday = (
        isMonday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Monday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextMonday(new Date())} time={17} title="Monday Evening Service"/></Grid>
            </>

    )

    const Tuesday = (
        isTuesday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Tuesday Evening Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextTuesday(new Date())} time={17} title="Tuesday Evening Service"/></Grid>
            </>
    )

    const Wednesday = (
        isWednesday(new Date()) && new Date().getHours() < 18 ?
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={new Date()} time={17} title="Mid-Week Service"/></Grid>
            </>
            :
            <>
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextWednesday(new Date())} time={17}
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
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextThursday(new Date())} time={17}
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
                <Grid item xs={12} container justifyContent="center"><Program newDate={nextFriday(new Date())} time={17} title="Friday Evening Service"/></Grid>
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
        <Grid container justifyContent="center">
            <Grid item xs={12} container justifyContent="center">
                <Typography variant="h4" mt={2}>Church Programs</Typography>
            </Grid>
            <Grid item mt={4} xs={12} md={10} lg={8} container justifyContent="center" spacing={2}>
                 <Iframe/>
            </Grid>
            <Grid container justifyContent="center" style={{padding: "20px 0 10px"}}>
                <Button
                    startIcon={<YouTube color="primary" size="1.5em"/>}
                    style={{width: 300}}
                    variant="contained"
                    className="btn-height"
                >
                    Latest Video
                </Button>
            </Grid>
            <Grid item mt={4} xs={12} container justifyContent="center" spacing={2}>
                {console.log(isThursday(new Date()), new Date().getHours() >= 18, new Date().getHours())}
                {/*<Grid item xs={12}><Program newDate={nextSunday(new Date())} time={17} title="Evening Service"/></Grid>*/}
                {isMonday(new Date()) && new Date().getHours() < 18 || isSunday(new Date()) && new Date().getHours() >= 13 ? <>{Monday}{Tuesday}{Wednesday}{Thursday}{Friday}{Sunday}</> : <></>}
                {isTuesday(new Date()) && new Date().getHours() < 18 || isMonday(new Date()) && new Date().getHours() >= 18 ? <>{Tuesday}{Wednesday}{Thursday}{Friday}{Sunday}{Monday}</> : <></>}
                {isWednesday(new Date()) && new Date().getHours() < 18 || isTuesday(new Date()) && new Date().getHours() >= 18 ? <>{Wednesday}{Thursday}{Friday}{Sunday}{Monday}{Tuesday}</> : <></>}
                {isThursday(new Date()) && new Date().getHours() < 18 || isWednesday(new Date()) && new Date().getHours() >= 18 ? <>{Thursday}{Friday}{Sunday}{Monday}{Tuesday}{Wednesday}</> : <></>}
                {isFriday(new Date()) && new Date().getHours() < 18 || isThursday(new Date()) && new Date().getHours() >= 18 ? <>{Friday}{Sunday}{Monday}{Tuesday}{Wednesday}{Thursday}</> : <></>}
                {isSaturday(new Date()) || isSunday(new Date()) && new Date().getHours() < 13  || isFriday(new Date()) && new Date().getHours() >= 18 ? <>{Sunday}{Monday}{Tuesday}{Wednesday}{Thursday}{Friday}</> : <></>}
            </Grid>
        </Grid>
    );
}

export default Programs;