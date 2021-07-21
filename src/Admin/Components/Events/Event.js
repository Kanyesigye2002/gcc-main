import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from "react-redux";
import {Url} from "../../../Redux/Url";
import axios from "axios";
import {getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import {FetchEvents} from "../../../Redux/MiddleWare";
import Divider from "@material-ui/core/Divider";

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

    const [status, setStatus] = useState(true)

    const {title, description, fileName, date} = props.event

    const remove = () => {
        // let eventsNew = []
        // events.map((event) => {
        //     if (event !== props.event) {
        //         eventsNew.push(event)
        //     }
        // })
        // dispatch(
        //     {
        //         type: "SetEvents",
        //         payload: eventsNew
        //     }
        // )
        const response = axios({
            method:'DELETE',
            url:`${Url}/api/gcc/admin/v1/events/${props.event.id}`,
            headers:{
                'Authorization':'Bearer '+getToken()
            }
        }).then(() => {
            dispatch(FetchEvents())
        })

        console.log("Request: ", response)
    }

    useEffect(() => {
        const countdownDate = new Date(date).getTime();
        const now = new Date().getTime();
        const distance = countdownDate - now;
        if (distance > 100) {
            setStatus(false)
        }
    },[])

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
                    <Divider/>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {status? "Already happened" : "Coming soon"}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions style={{justifyContent: "space-between"}}>
                <Button size="small" color="primary" onClick={() => remove()}>Remove</Button>
                <Button size="small" color="primary" onClick={() => edit()}>Edit Event</Button>
            </CardActions>
        </Card>
    );
}
