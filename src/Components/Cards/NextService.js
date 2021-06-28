import React, {useEffect, useRef, useState} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    root: {
        width: 600,
        maxWidth: 600,
        minWidth: 345,

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
        height: 150
    }
});

const NextService = (props) => {

    const classes = useStyles();

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {

        console.log(props.date)
        const countdownDate = new Date(props.date).getTime();
        console.log(countdownDate)

        // const countdownDate = new Date('2021/06/28, 12:00').getTime();

        console.log(new Date('12/06/2021, 12:00').getTime())
        console.log(new Date().getTime())

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days<10) {
                days = "0" + days;
            }
            if (hours<10) {
                hours = "0" + hours;
            }
            if (minutes<10) {
                minutes = "0" + minutes;
            }
            if (seconds<10) {
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

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.buttonRoot}>
                <CardContent style={{position: "absolute", top: 0, width: "100%"}}>
                    <Grid container spacing={1} direction="row" justify="center">
                        <Grid item xs={12} container justify="center" style={{margin: 0}}>
                            <Typography gutterBottom variant="h4" component="h2">
                                Next Service starts
                            </Typography>
                        </Grid>
                        <Grid container spacing={4} direction="row" justify="center">
                            <Grid item>
                                <Typography style={{textAlign: "center"}} variant="h6" color="textSecondary" component="p">
                                    Days
                                </Typography>
                                <Typography  style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    {timerDays}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    Hours
                                </Typography>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    {timerHours}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    Min
                                </Typography>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    {timerMinutes}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    Sec
                                </Typography>
                                <Typography style={{textAlign: "center"}}  variant="h6" color="textSecondary" component="p">
                                    {timerSeconds}
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
            </CardActionArea>

            <Grid container justify="center">
                <CardActions style={{ width: "100%", justifyContent: "space-between"}}>
                    <Button size="small" color="primary">Get Reminder</Button>
                    <Button size="small" color="primary">View All events</Button>
                </CardActions>
            </Grid>


        </Card>
    );
}

export default NextService;