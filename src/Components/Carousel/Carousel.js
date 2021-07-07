import React, {useEffect, useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/lazy/lazy.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Lazy, Pagination, Navigation, Autoplay
} from 'swiper/core';

import {Button, Typography, Chip, Grid, Divider} from "@material-ui/core";
import {CodeOff, Security, Send, Speed, Tv} from "@material-ui/icons";
import {Zoom} from "react-reveal";

import image from '../../Assets/Images/newpics/70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg'


// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation, Autoplay]);


const useStyles = makeStyles(() => ({
    root: {
        height: "80vh",
    },
}));

const Carousels = () => {
    const classes = useStyles()

    const [show, setShow] = useState(false)
    const [end, setEnd] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <Paper className={classes.root}>
            <Swiper
                onSlideChange={() => {
                    if (!end) {
                        setShow(false)
                        console.log("Show: ", show)
                        setShow(true)
                    }
                }}
                onReachEnd={() => setEnd(true)}
                // style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}}
                // lazy={true}
                pagination={{
                    "clickable": true
                }}
                autoplay={{"delay": 3000}}
                navigation={false}
                className="mySwiper">
                <SwiperSlide>
                    <Zoom>
                        <div className={"swiper-slide"} style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <Zoom when={show}><Typography variant="h4">Glorious Church of Christ</Typography></Zoom>
                        </div>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <div className={"swiper-slide"} style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <div className={"swiper-slide"} style={{background: "#2020207A", alignItems: "start", paddingTop: "60px"}}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8}>
                                        <Typography variant="subtitle1">Glorious Church Of Christ</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Divider style={{height: 2}} flexItem/>
                                    </Grid>
                                    <Grid item xs={10} container alignItems="flex-start" spacing={2} direction="column">
                                        <Grid item>
                                            <Typography variant="h4">CHURCH ONLINE</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <Typography variant="h6" style={{letterSpacing: "0.25em}"}}>We are Live Now !!!!!!!!</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <Button variant="contained" color="primary" endIcon={<Tv />}>Watch Now</Button>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <div className={"swiper-slide"} style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <div className={"swiper-slide"}  style={{background: "#2020207A", alignItems: "start", paddingTop: "60px"}}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8}>
                                        <Typography variant="subtitle1">Glorious Church Of Christ</Typography>
                                    </Grid>
                                    <Grid item xs={10} p={2}>
                                        <Divider style={{height: 2}} flexItem/>
                                    </Grid>
                                    <Grid item xs={10} container alignItems="flex-start" spacing={2} direction="column">
                                        <Grid item>
                                            <Typography variant="h4">GIVE ONLINE</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}} container justifyContent="center">
                                            <Grid item>
                                                <Chip
                                                    label="Secure"
                                                    icon={<Security />}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Chip
                                                    label="Fast"
                                                    icon={<Speed />}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Chip
                                                    label="Easy"
                                                    icon={<CodeOff />}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <Button variant="contained" color="primary" startIcon={<Send />}>Give Now</Button>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </div>
                        </div>
                    </Zoom>
                </SwiperSlide>
            </Swiper>
        </Paper>
    );
}

export default Carousels;