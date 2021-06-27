import React from 'react';

import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

import {FaLocationArrow, FaPhone, FaWindowClose} from "react-icons/fa";
import {MdMail} from "react-icons/md";

const useStyles = makeStyles({
    root: {
        padding: 3,
        backgroundColor: "#000000de",
        color: "#fff"
    },
    media: {
        height: 300,
    },
    buttonRoot: {
        overflow: "hidden",
        height: 250
    }
});

const EventPage = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid className="closebtn" container style={{padding: "0 10px"}}>
                <h2>{props.event.title}</h2>
                <span onClick={() => props.onClose()}><FaWindowClose/></span>
            </Grid>

            <div className="scrol">

                <div className="overlay-content">
                    <Grid spacing={2} container direction="row" style={{padding: "0 10px"}}>
                        <Grid spacing={2} item xs={12} md={6}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={props.event.fileName}
                                    title="Contemplative Reptile"
                                />

                                <h5>Event Organised by: {props.event.host}</h5>
                                <h3>Event Description:</h3>
                                <p>
                                    {props.event.description}
                                </p>
                                <Grid container justify="space-between" alignItems="center">
                                    <span className="">Location: </span>
                                    <span className="badge rounded-pill"><FaLocationArrow/></span>
                                </Grid>
                                <Grid container justify="space-between" alignItems="center">
                                    <span className="">Date: </span>
                                    <span className="badge rounded-pill"><FaLocationArrow/></span>
                                </Grid>
                                <p>{props.event.date}</p>
                                <Grid container justify="space-between" alignItems="center">
                                    <span className="">Email: </span>
                                    <span className="badge rounded-pill"><MdMail/></span>
                                </Grid>
                                <p>gloriouschurch@gcc.com</p>
                                <Grid container justify="space-between" alignItems="center">
                                    <span className="">Call: </span>
                                    <span className="badge rounded-pill"><FaPhone/></span>
                                </Grid>
                                <p>Tel +256-782 325564</p>
                            </Card>
                        </Grid>
                        <Grid spacing={4} item xs={12} md={6}>
                            <Card className={classes.root}>
                                <Grid container justify="space-between" alignItems="center">
                                    <span className="">Location: </span>
                                    <span className="badge rounded-pill"><FaLocationArrow/></span>
                                </Grid>
                                <Grid container justify="space-between" alignItems="center">
                                    <p>Glorious Church Of Christ ministries Bunamwaya Located 200M from Bunamwaya-Ngobe
                                        Road</p>
                                </Grid>

                                <Grid container justify="space-between" alignItems="center">
                                    <iframe title="Church Location"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                            frameBorder="0"
                                            style={{border: "0", width: "100%", height: "500px", borderRadius: "10px", paddingTop: "3rem"}}
                                            allowFullScreen=""/>
                                </Grid>

                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>


    );
}

export default EventPage;
