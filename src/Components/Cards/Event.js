import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {useDispatch, useSelector} from "react-redux";
import Axios from "axios";
import {Url} from "../../Redux/Url";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,

        maxHeight: 300,
        minHeight: 300,
    },
    media: {
        height: 140,
    },
    buttonRoot: {
        overflow: "hidden",
        height: 250
    }
});

export default function Event(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const events = useSelector(state => state.Events)

    const {title, description, fileName} = props.event

    const remove = () => {
        let eventsNew = []
        events.map((event) => {
            if (event !== props.event) {
                eventsNew.push(event)
            }
        })
        dispatch(
            {
                type: "SetEvents",
                payload: eventsNew
            }
        )
        const API_URL = Url + "/api/gcc/v1/events/" + props.event.id;
        const response = Axios.delete(API_URL)

        console.log(API_URL, response)


    }

    const edit =()=> {
        props.setEvent(props.event)
        props.setOpenPopup(true)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.buttonRoot}>
                <CardMedia
                    className={classes.media}
                    image={fileName}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>

            <CardActions style={{justifyContent: "space-between"}}>
                <Button size="small" color="primary" onClick={() => remove()}>Get Reminder</Button>
                <Button size="small" color="primary" onClick={() => props.view(props.event)}>View Event</Button>
            </CardActions>
        </Card>
    );
}

