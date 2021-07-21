import React from 'react';

import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,

        maxHeight: 300,
        minHeight: 300,
        borderRadius: 5
    },
    media: {

    },
    buttonRoot: {
        overflow: "hidden",
        height: 250
    }
});

export default function MediaCard(props) {
    const classes = useStyles();


    const {image, title} = props.content

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.buttonRoot}>
                <div style={{height: "198px", borderRadius: "4px", width: "100%", overflow: "hidden"}}>
                    <img src={image} alt="Glorious Church" style={{width: "100%", borderRadius: 5}}/>
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions style={{justifyContent: "space-between"}}>
                <Link to="/donate">
                    <Button variant="outlined" color="primary" size="small">Support</Button>
                </Link>
                <Button variant="outlined" color="primary" size="small" onClick={() => props.view(props.content)}>Read More</Button>
            </CardActions>
        </Card>
    );
}
