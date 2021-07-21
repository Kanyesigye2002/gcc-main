import React, {useEffect, useRef, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {format} from "date-fns";


const useStyles = makeStyles({
    root: {
        width: "inherit",
        maxWidth: 600,
        // minWidth: 345,

        maxHeight: 200,
        minHeight: 200,
        border: "1px solid black",
        margin: "2px"
    },
    media: {
        height: 140,
    },
    buttonRoot: {
        overflow: "hidden",
        height: 200
    }
});
function Program(props) {
    const classes = useStyles();

    const {newDate, time, title} = props
    //
    // const newDate = new Date(modeDate.getYear(), modeDate.getMonth(), modeDate.getDate())

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [date, setDate] = useState(new Date())

    let interval = useRef();

    const startTimer = () => {

        // let date = date
        //
        // if (newDate !== undefined)
        //     date = newDate

        const countdownDate = new Date(date).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days < 10) {
                days = "0" + days;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (distance < 0) {
                //stop our time
                clearInterval(interval.current)
            } else {
                //update time
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    //commponent did mount function
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    useEffect(() => {
        setDate(new Date(new Date(newDate).getFullYear(), newDate.getMonth(), newDate.getDate(), time))
        console.log("Date: ", new Date(newDate))
    }, [])

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.buttonRoot}>
                <CardContent style={{position: "absolute", top: 0, width: "100%"}}>
                    <Grid container spacing={1} direction="row" justifyContent="center">
                        <Grid item xs={12} container justifyContent="center" style={{margin: 0}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item xs={12} container justifyContent="center" style={{margin: 0}}>
                            <Typography gutterBottom variant="h6" component="p">
                                {/*{console.log(new Date(newDate.getYear(), newDate.getMonth(), newDate.getDate()))}*/}
                                {/*{console.log(date)}*/}
                                {format(date, "PPpp")}
                            </Typography>
                        </Grid>
                        <Grid container spacing={4} direction="row" justifyContent="center">
                            <Grid item>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    Days
                                </Typography>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    {timerDays}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    Hours
                                </Typography>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    {timerHours}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    Min
                                </Typography>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    {timerMinutes}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    Sec
                                </Typography>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary"
                                            component="p">
                                    {timerSeconds}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Program;