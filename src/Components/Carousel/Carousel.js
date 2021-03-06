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

import {Button, Typography, Chip, Grid, Divider, useMediaQuery} from "@material-ui/core";
import {CodeOff, Security, Send, Speed, Tv} from "@material-ui/icons";
import {Zoom} from "react-reveal";

import image from '../../Assets/Images/newpics/70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg'
import {Link} from "react-router-dom";
import {createTheme} from "@material-ui/core/styles";


// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation, Autoplay]);


const useStyles = makeStyles(() => ({
    root: {
        height: "80vh",
    },
}));

const Carousels = (props) => {
    const classes = useStyles()

    const {images} = props

    const [show, setShow] = useState(false)
    const [end, setEnd] = useState(false)

    const theme = createTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down("md"))

    useEffect(() => {
        setShow(true)
    }, [])

    return (
        <Paper style={{height: isMobile ? "50vh" : "80vh"}}>
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
                            backgroundImage: `url(${images.image1 !== undefined? images.image1 : image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <Zoom when={show}><Typography color="#fff" variant="h4">Glorious Church of Christ</Typography></Zoom>
                        </div>
                    </Zoom>
                </SwiperSlide>
                <SwiperSlide>
                    <Zoom>
                        <div className={"swiper-slide"} style={{
                            backgroundImage: `url(${images.image2 !== undefined? images.image2 : image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <div className={"swiper-slide"} style={{background: "#2020207A", alignItems: "start", paddingTop: "60px"}}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8}>
                                        <Typography color="#fff" variant="subtitle1">Glorious Church Of Christ</Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Divider style={{height: 2}} flexItem/>
                                    </Grid>
                                    <Grid item xs={10} container alignItems="flex-start" spacing={2} direction="column">
                                        <Grid item>
                                            <Typography color="#fff" variant="h4">CHURCH ONLINE</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <Typography color="#fff" variant="h6" style={{letterSpacing: "0.25em}"}}>Watch us on Youtube !</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <a href={`https://www.youtube.com/watch?v=${props.data.latestVideo}`}>
                                                 <Button variant="contained" color="primary" endIcon={<Tv />}>Watch Now</Button>
                                            </a>
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
                            backgroundImage: `url(${images.image3 !== undefined? images.image3 : image})`,
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top"
                        }}>
                            <div className={"swiper-slide"}  style={{background: "#2020207A", alignItems: "start", paddingTop: "60px"}}>
                                <Grid container justifyContent="center">
                                    <Grid item xs={8}>
                                        <Typography color="#fff" variant="subtitle1">Glorious Church Of Christ</Typography>
                                    </Grid>
                                    <Grid item xs={10} p={2}>
                                        <Divider style={{height: 2}} flexItem/>
                                    </Grid>
                                    <Grid item xs={10} container alignItems="flex-start" spacing={2} direction="column">
                                        <Grid item>
                                            <Typography color="#fff" variant="h4">GIVE ONLINE</Typography>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}} container justifyContent="center">
                                            <Grid item>
                                                <Chip
                                                    style={{color: "#fff"}}
                                                    label="Secure"
                                                    icon={<Security color="#fff"/>}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Chip
                                                    style={{color: "#fff"}}
                                                    label="Fast"
                                                    icon={<Speed color="#fff"/>}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Chip
                                                    style={{color: "#fff"}}
                                                    label="Easy"
                                                    icon={<CodeOff color="#fff"/>}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item style={{width: "fit-content"}}>
                                            <Link to="/donate">
                                                <Button variant="contained" color="primary" startIcon={<Send />}>Give Now</Button>
                                            </Link>
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