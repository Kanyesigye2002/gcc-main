import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import Axios from "axios";
import {Url} from "../../../Redux/Url";
import axios from "axios";
import {getToken} from "../../../Redux/AdminReducers/api/authenticationService";
import {FetchEvents} from "../../../Redux/MiddleWare";

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

export default function MediaCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const events = useSelector(state => state.Events)

    const {title, description, fileName} = props.event

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
                <Button size="small" color="primary" onClick={() => remove()}>Remove</Button>
                <Button size="small" color="primary" onClick={() => edit()}>Edit Event</Button>
            </CardActions>
        </Card>
    );
}
